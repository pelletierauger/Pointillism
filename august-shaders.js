// beginGLSL

drawCount = 2;
function setShaders() {
    /*======================= Shaders =======================*/
    // vertex shader source code
    var vertCode = `
        // our vertex data
        attribute vec3 aPosition;
        // our texcoordinates
        attribute vec2 aTexCoord;
        // this is a variable that will be shared with the fragment shader
        // we will assign the attribute texcoords to the varying texcoords to move them from the vert shader to the frag shader
        // it can be called whatever you want but often people prefiv it with 'v' to indicate that it is a varying
        varying vec2 vTexCoord;
        void main() {
        // copy the texture coordinates
        vTexCoord = aTexCoord;
        // copy the position data into a vec4, using 1.0 as the w component
        vec4 positionVec4 = vec4(aPosition, 1.0);
        positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
        // send the vertex information on to the fragment shader
        gl_Position = positionVec4;
        }
    `;
    // Create a vertex shader object
    var vertShader = gl.createShader(gl.VERTEX_SHADER);
    // Attach vertex shader source code
    gl.shaderSource(vertShader, vertCode);
    // Compile the vertex shader
    gl.compileShader(vertShader);
    // fragment shader source code
    var fragCode = `
precision mediump float;
// this is the same variable we declared in the vertex shader
// we need to declare it here too!
varying vec2 vTexCoord;
uniform float time;
float plot(vec2 s, float p) {
  float largeur = abs(sin(time * 0.01)) * 0.1 + 0.1;
  return smoothstep(p - largeur, p, s.y) - smoothstep(p, p + largeur, s.y);
}
float circ(float speed, float size, float vx, float vy, float dist) {
  // float x = cos(time * speed) * dist * 0.012 - 0.425;
  // float y = sin(time * speed) * dist * 0.012 - 0.25;
  float x = (cos(time * speed * 0.05) + cos(sin(time * 0.5))) * dist * (sin(time * 0.25)) * 0.1 - 0.425;
  float y = (sin(time * speed * 0.05) + sin(cos(time * 0.5))) * dist * (sin(time * 0.25)) * 0.1 - 0.425;
  // float x = cos(time * speed) * dist * abs(sin(time * 0.01) * 1.0) - 0.425;
  // float y = sin(time * speed) * dist * abs(sin(time * 0.01) * 1.0) - 0.25;
  vec2 v = vec2(vx + x, vy + y);
  float d = 1.0 / length(v * size);
d = sin(d * sin(time * 0.1) * 100000.);
  return d;
}
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    vec2 uv = gl_FragCoord.xy / vec2(1600, 1600);
    // float d2 = 1.0 / length(v * 25.0);
    float c = 0.0;
    vec2 center = uv - vec2(11., 11.);
//     float loww = sin(length(center) * 0.1) * 1.;
    // float d = circ(0.1, 25.0, uv.x, uv.y, 1.0);
    // float d2 = circ(0.07, 15.0, uv.x, uv.y, 0.5);
//     uv -= vec2(-0.1, -0.1);
    for (int i = 0; i < 100; i += 1) {
      float s = float(i) * 0.1;
      // Spidery
      // float e = circ(0.0025 * s, 10.0 * (4.0 * s * 0.05), uv.x, uv.y, 1.0 - (s * 0.25));
      // Classic
      float e = circ(24.5 * s, 100000000.0 * (2.0 / s * 0.25), uv.x, uv.y, 1.0 - (s * 0.5));
      // Spidery 2
//       float e = circ(0.0125 * s, 2.0 - (s * -0.0115), uv.x, uv.y, 1.0 - (s * 0.25));
      c = c + e * 10.;
    }
//     uv *= 0.5;
//     
    c = sin((c * 0.15) * 2.) * cos(c * 1.5 + cos(c * 0.25) * 1.) + 1.0 * 1.0;
    float c2 = cos(c * 1.5) + 1.0 * 1.;
    float rando = rand(vec2(uv.x, uv.y));
    // float c = 0.0;
    // gl_FragColor = vec4(1.0 - c * 0.5, 1.0 - c * 0.05, 0.5 - c, 1.0);
    // gl_FragColor = vec4(vec3(1.0 - c * 0.05 + (rando * 0.1)), 1.0);
    // float pix = 1.0 - c * 0.05 + (rando * 0.1);
    // float pix2 = 1.0 - c * 0.025 + (rando * 0.1);
    // gl_FragColor = vec4(pix, 0.25 - pix2, 0.75 - pix * 0.5, 1.0);
    // warm blue, purple and cyan
    float pix = 1.0 - c * 0.05 + (rando * 0.1);
    float pix2 = 1.0 - c * 0.045 + (rando * 0.1);
//      gl_FragColor = vec4(1.35 - pix2 * 1., c * 0.02, (1. - c2 * 0.5) * 1., 1.0);
    vec4 finCol = vec4(0.7 - c2 * 1.0, 1.5 - pix2 * 1.2, (1.2 - c2 * 0.5) * 1., 1.0);
//     finCol.r *= -.0;
    gl_FragColor = vec4(finCol.rgb, finCol.a);
//     gl_FragColor = vec4(0.475 - c2, 0.125 - pix2, pix2 - 0.5, 1.0);
    // gl_FragColor = vec4(vec3(d) + vec3(d2), 1.0);
}
    `;
    // Create fragment shader object
    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    // Attach fragment shader source code
    gl.shaderSource(fragShader, fragCode);
    // Compile the fragmentt shader
    gl.compileShader(fragShader);
    // Create a shader program object to
    // store the combined shader program
    shaderProgram = gl.createProgram();
    // Attach a vertex shader
    gl.attachShader(shaderProgram, vertShader);
    // Attach a fragment shader
    gl.attachShader(shaderProgram, fragShader);
    // Link both the programs
    gl.linkProgram(shaderProgram);
    // Use the combined shader program object
    gl.useProgram(shaderProgram);
    time = gl.getUniformLocation(shaderProgram, "time");
}
setShaders();