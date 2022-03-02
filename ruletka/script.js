'use strict';
const gl = document.querySelector('#c').getContext('webgl');

const vs = `
attribute float vertexId;
uniform float numVerts;
uniform vec2 resolution;

#define PI radians(180.0)

void main() {
  float numSlices = 8.0;
  float sliceId = floor(vertexId / 3.0);
  float triVertexId = mod(vertexId, 3.0);
  float edge = triVertexId + sliceId;
  float angleU = edge / numSlices;  // 0.0 to 1.0
  float angle = angleU * PI * 2.0;
  float radius = step(triVertexId, 1.5);
  vec2 pos = vec2(cos(angle), sin(angle)) * radius;

  float aspect = resolution.y / resolution.x;
  vec2 scale = vec2(aspect, 1);
  
  gl_Position = vec4(pos * scale, 0, 1);
}
`;

const fs = `
precision mediump float;

void main() {
  gl_FragColor = vec4(1, 0, 0, 1);
}
`;

// setup GLSL program
const program = webglUtils.createProgramFromSources(gl, [vs, fs]);
const vertexIdLoc = gl.getAttribLocation(program, 'vertexId');
const numVertsLoc = gl.getUniformLocation(program, 'numVerts');
const resolutionLoc = gl.getUniformLocation(program, 'resolution');

// Make a buffer with just a count in it.

const numVerts = 8 * 3;
const vertexIds = new Float32Array(numVerts);
vertexIds.forEach((v, i) => {
  vertexIds[i] = i;
});

const idBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, idBuffer);
gl.bufferData(gl.ARRAY_BUFFER, vertexIds, gl.STATIC_DRAW);

// draw
function render(time) {
  time *= 0.001;  // convert to seconds

  webglUtils.resizeCanvasToDisplaySize(gl.canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  gl.useProgram(program);

  {
    // Turn on the attribute
    gl.enableVertexAttribArray(vertexIdLoc);

    // Bind the id buffer.
    gl.bindBuffer(gl.ARRAY_BUFFER, idBuffer);

    // Tell the attribute how to get data out of idBuffer (ARRAY_BUFFER)
    const size = 1;          // 1 components per iteration
    const type = gl.FLOAT;   // the data is 32bit floats
    const normalize = false; // don't normalize the data
    const stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    const offset = 0;        // start at the beginning of the buffer
    gl.vertexAttribPointer(
        vertexIdLoc, size, type, normalize, stride, offset);
  }

  // tell the shader the number of verts
  gl.uniform1f(numVertsLoc, numVerts);
  // tell the shader the resolution
  gl.uniform2f(resolutionLoc, gl.canvas.width, gl.canvas.height);

  const offset = 0;
  gl.drawArrays(gl.TRIANGLES, offset, numVerts);
}
render();
