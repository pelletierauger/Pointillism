// beginGLSL

setBothShaders(`
precision mediump float;
varying vec2 vTexCoord;
uniform float time;
const float TURBULENCE = 0.04;
//noise function from iq: https://www.shadertoy.com/view/Msf3WH
vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}
float noise(vec2 p) {
    const float K1 = 0.366025404; // (sqrt(3)-1)/2;
    const float K2 = 0.211324865; // (3-sqrt(3))/vec2  i = floor( p + (p.x+p.y)*K1 );
    vec2 a = p - i + (i.x + i.y) * K2;
    float m = step(a.y, a.x);
    vec2 o = vec2(m, 1.0 - m);
    vec2 b = a - o + K;
    vec2 c = a - 1.0 + 2.0 * K2;
    vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
    vec3 n = h * h * h * h * vec3(dot(a, hash(i + 0.0)), dot(b, hash(i + o)), dot(c, hash(i + 1.0)));
    return dot(n, vec3(70.0));
}
const mat2 m2 = mat2(1.6,  1.2, -1.2,  1.6);
float fbm(vec2 p) {
    float amp = 0.5;
    float h = 0.0;
    for (int i = 0; i < 8; i++) {
        float n = noise(p);
        h += amp * n;
        amp *= 0.5;
        p = m2 * p;
    }
	return  0.5 + 0.5 * h;
}
vec3 smokeEffect(vec2 uv) {
    vec3 col = vec3(0.0);
    // time scale
    float v = 0.0002;
    vec3 smoke = vec3(1.0);
    //uv += mo * 10.0;
    vec2 scale = uv * 0.5;
    vec2 turbulence = TURBULENCE * vec2(noise(vec2(uv.x * 3.5, uv.y * 3.2)), noise(vec2(uv.x * 2.2, uv.y * 1.5)));
    scale += turbulence;
    float n1 = fbm(vec2(scale.x - abs(sin(time * v * 2.0)), scale.y - 50.0 * abs(sin(time * v))));
    col = mix(col, smoke, smoothstep(0.5, 0.9, n1));
    //float y = fragCoord.y/iResolution.y;
    //float fade = exp(-(y*y));
    //col *= fade;
    col = clamp(col, vec3(0.0), vec3(1.0));
    return col;
}
float circle(vec2 p, float r) {
    float c = length(p) - r;
    return smoothstep(r + 0.01, r, c);
}
float sinwave(vec2 p, float scale, float amp) {
    float wave = cos(p.x * scale + 0.5) + 0.25 * cos(p.x * scale * scale);
    float s = smoothstep(amp + 0.01, amp, amp * wave - p.y);
    return s;
}
void main() {
    vec2 uv = gl_FragCoord.xy / vec2(1600, 1600);
    vec2 p = vec2(1.0);
    p -= 0.5;
//     p.x *= iResolution.x / iResolution.y;
    vec3 col = vec3(0.0);
    vec3 smoke = smokeEffect(p);
//     vec3 tex = 0.02 * texture(iChannel0, uv * 2.5).rgb;   
    vec3 background = 0.7 * vec3(238.0, 232.0, 170.0) / 255.0;
    vec3 mountCol = mix(vec3(102.0, 153.0, 153.0) / 255.0, vec3(153.0 ,204.0 ,0.0) / 255.0, p.y + 0.5);
    vec3 sunCol = 0.85 * mix(vec3(1.0, 0.0, 0.0), vec3(1.0, 1.0, 0.0), p.y + 0.5);
    vec3 cloudCol = vec3(0.9);
    float t = time * 0.05;
    vec2 sunPos = p - vec2(0.4 * cos(t), 0.4 * sin(t));
    float sun = circle(sunPos, 0.1);
    float mountain1 = sinwave(p - vec2(0.5, -0.1), 3.0, 0.1);
    float mountain2 = sinwave(p, 3.0, 0.2);
    float cloud = 1.0 - smoke.r;
    col = mix(background, sunCol, sun);
    col = mix(mountCol * 0.9, col, mountain1);
    col = mix(cloudCol, col, cloud);
    col = mix(mountCol, col, mountain2);
    col *= 0.2 + 0.8 * pow(32.0 * uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y), 0.2);
    gl_FragColor = vec4(col, 1.0);
}
`);



//--------------------//
//--blue-puddles-2----//
//--débuts-lancinants-//
//--------------------//
setBothShaders(`
precision mediump float;
varying vec2 vTexCoord;
uniform float time;
const float TURBULENCE = 0.04;
//noise function from iq: https://www.shadertoy.com/view/Msf3WH
vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}
float noise(vec2 p) {
    const float K1 = 0.366025404;
    const float K2 = 0.211324865;
    vec2 i = floor(p + (p.x + p.y) * K1);
    vec2 a = p - i + (i.x + i.y) * K2;
    float m = step(a.y, a.x);
    vec2 o = vec2(m, 1.0 - m);
    vec2 b = a - o + K2;
    vec2 c = a - 1.0 + 2.0 * K2;
    vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
    vec3 n = h * h * h * h * vec3(dot(a, hash(i + 0.0)), dot(b, hash(i + o)), dot(c, hash(i + 1.0)));
    return dot(n, vec3(70.0));
}
const mat2 m2 = mat2(1.6,  1.2, -1.2,  1.6);
float fbm(vec2 p) {
    float amp = 0.5;
    float h = 0.0;
    for (int i = 0; i < 8; i++) {
        float n = noise(p);
        h += amp * n;
        amp *= 0.5;
        p = m2 * p;
    }
	return  0.5 + 0.5 * h;
}
               vec3 smokeEffect(vec2 uv) {
    vec3 col = vec3(0.0);
    // time scale
    float v = 0.0002;
    vec3 smoke = vec3(1.0);
    //uv += mo * 10.0;
    vec2 scale = uv * 0.5;
    vec2 turbulence = TURBULENCE * vec2(noise(vec2(uv.x * 3.5, uv.y * 3.2)), noise(vec2(uv.x * 2.2, uv.y * 1.5)));
    scale += turbulence;
    float n1 = fbm(vec2(scale.x - abs(sin(time * v * 2.0)), scale.y - 50.0 * abs(sin(time * v))));
    col = mix(col, smoke, smoothstep(0.5, 0.9, n1));
    //float y = fragCoord.y/iResolution.y;
    //float fade = exp(-(y*y));
    //col *= fade;
    col = clamp(col, vec3(0.0), vec3(1.0));
    return col;
}
float circle(vec2 p, float r) {
    float c = length(p) - r;
    return smoothstep(r + 0.01, r, c);
}
float sinwave(vec2 p, float scale, float amp) {
    float wave = cos(p.x * scale + 0.5) + 0.25 * cos(p.x * scale * scale);
    float s = smoothstep(amp + 0.01, amp, amp * wave - p.y);
    return s;
}
float plot(vec2 s, float p) {
    float largeur = abs(sin(time * 0.01)) * 0.1 + 0.1;
    return smoothstep(p - largeur, p, s.y) - smoothstep(p, p + largeur, s.y);
}
float circ(float speed, float size, float vx, float vy, float dist) {
  // float x = cos(time * speed) * dist * 0.012 - 0.425;
  // float y = sin(time * speed) * dist * 0.012 - 0.25;
  float t = time;
  float x = cos(t * speed * 1000.0) * dist * (sin(t)) * 0.12 - 0.425;
  float y = sin(t * speed * 1000.0) * dist * (sin(t)) * 0.12 - 0.25;
  // float x = cos(time * speed) * dist * abs(sin(time * 0.01) * 1.0) - 0.425;
  // float y = sin(time * speed) * dist * abs(sin(time * 0.01) * 1.0) - 0.25;
  vec2 v = vec2(vx + x, vy + y);
  float d = 1.0 / length(v * size);
     d = sin(d * cos(t * 5.) * 1.);
  return d;
}
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    vec2 uv = gl_FragCoord.xy / vec2(1600, 1600);
    vec2 p = gl_FragCoord.xy/1000.0;
    p -= 0.5;
//     p.x *= 2.0;
//     p *= 2.0;
//     p.x *= iResolution.x / iResolution.y;
    vec3 col = vec3(0.0);
    vec3 smoke = smokeEffect(p);
//     vec3 tex = 0.02 * texture(iChannel0, uv * 2.5).rgb;   
    vec3 background = 0.7 * vec3(238.0, 232.0, 170.0) / 255.0;
    vec3 mountCol = mix(vec3(102.0, 153.0, 153.0) / 255.0, vec3(153.0 ,204.0 ,0.0) / 255.0, p.y + 0.5);
    vec3 sunCol = 0.85 * mix(vec3(1.0, 0.0, 0.0), vec3(1.0, 1.0, 0.0), p.y + 0.5);
    vec3 cloudCol = vec3(0.9);
    float t = time * 20.5;
    vec2 sunPos = p - vec2(0.4 * cos(t), 0.4 * sin(t));
    float sun = circle(sunPos, 0.1);
    float mountain1 = sinwave(p - vec2(0.5, -0.1), 3.0, 0.1);
    float mountain2 = sinwave(p, 3.0, 0.2);
    float cloud = 1.0 - smoke.r;
    col = mix(background, sunCol, sun);
    col = mix(mountCol * 0.9, col, mountain1);
    col = mix(cloudCol, col, cloud);
    col = mix(mountCol, col, mountain2);
    col *= 0.2 + 0.8 * pow(32.0 * uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y), 0.2);
    gl_FragColor = vec4(col, 1.0);
}
`);




//--------------------//
//--blue-puddles-2----//
//--débuts-lancinants-//
//--------------------//
setBothShaders(`
precision mediump float;
varying vec2 vTexCoord;
uniform float time;
const float TURBULENCE = 0.009;
//noise function from iq: https://www.shadertoy.com/view/Msf3WH
vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}
float noise(vec2 p) {
    const float K1 = 0.366025404;
    const float K2 = 0.211324865;
    vec2 i = floor(p + (p.x + p.y) * K1);
    vec2 a = p - i + (i.x + i.y) * K2;
    float m = step(a.y, a.x);
    vec2 o = vec2(m, 1.0 - m);
    vec2 b = a - o + K2;
    vec2 c = a - 1.0 + 2.0 * K2;
    vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
    vec3 n = h * h * h * h * vec3(dot(a, hash(i + 0.0)), dot(b, hash(i + o)), dot(c, hash(i + 1.0)));
    return dot(n, vec3(70.0));
}
const mat2 m2 = mat2(1.6,  1.2, -1.2,  1.6);
float fbm(vec2 p) {
    float amp = 0.5;
    float h = 0.0;
    for (int i = 0; i < 8; i++) {
        float n = noise(p);
        h += amp * n;
        amp *= 0.5;
        p = m2 * p;
    }
	return  0.5 + 0.5 * h;
}
vec3 smokeEffect(vec2 uv) {
    vec3 col = vec3(0.0, 0.0, 0.0);
    // time scale
    float v = 0.0002;
    vec3 smoke = vec3(1.0);
    //uv += mo * 10.0;
    vec2 scale = uv * 0.5;
    vec2 turbulence = TURBULENCE * vec2(noise(vec2(uv.x * 3.5, uv.y * 3.2) * 1.), noise(vec2(uv.x * 2.2, uv.y * 1.5)));
    scale += turbulence;
    float n1 = fbm(vec2(scale.x - abs(sin(time * v * 1000.0)), scale.y - 50.0 * abs(sin(time * v * 410.0))));
    col = mix(col, smoke, smoothstep(0.35, 0.9, n1));
    //float y = fragCoord.y/iResolution.y;
    //float fade = exp(-(y*y));
    //col *= fade;
//     col.r * 0.5;
    col = clamp(col, vec3(0.0), vec3(1.0)) * 2.;
    return col;
}
float circle(vec2 p, float r) {
    float c = length(p) - r;
    return smoothstep(r + 0.02, r, c);
}
float sinwave(vec2 p, float scale, float amp) {
    float wave = cos(p.x * scale + 0.5) + 0.25 * cos(p.x * scale * scale);
    float s = smoothstep(amp + 0.04, amp, amp * wave - p.y);
    return s;
}
float plot(vec2 s, float p) {
    float largeur = abs(sin(time * 0.01)) * 0.1 + 0.1;
    return smoothstep(p - largeur, p, s.y) - smoothstep(p, p + largeur, s.y);
}
float circ(float speed, float size, float vx, float vy, float dist) {
  // float x = cos(time * speed) * dist * 0.012 - 0.425;
  // float y = sin(time * speed) * dist * 0.012 - 0.25;
  float t = time;
  float x = cos(t * speed * 1000.0) * dist * (sin(t)) * 0.12 - 0.425;
  float y = sin(t * speed * 1000.0) * dist * (sin(t)) * 0.12 - 0.25;
  // float x = cos(time * speed) * dist * abs(sin(time * 0.01) * 1.0) - 0.425;
  // float y = sin(time * speed) * dist * abs(sin(time * 0.01) * 1.0) - 0.25;
  vec2 v = vec2(vx + x, vy + y);
  float d = 1.0 / length(v * size);
     d = sin(d * cos(t * 5.) * 1.);
  return d;
}
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    vec2 uv = gl_FragCoord.xy / vec2(1600, 1600);
    vec2 p = gl_FragCoord.xy/1000.0;
    p -= 0.5;
//     p.x *= 2.0;
    p *= 2.0;
//     p.x *= iResolution.x / iResolution.y;
    vec3 col = vec3(0.0);
    vec3 smoke = smokeEffect(p);
//     vec3 tex = 0.02 * texture(iChannel0, uv * 2.5).rgb;   
    vec3 background = 0.7 * vec3(0.0, 0.0, 100.0) / 255.0;
    vec3 mountCol = mix(vec3(102.0, 153.0, 253.0) / 255.0, vec3(253.0 ,004.0 ,0.0) / 255.0, p.y + 0.5);
    vec3 sunCol = 0.85 * mix(vec3(1.0, 0.0, 1.0), vec3(1.0, 1.0, 0.0), p.y + 0.5);
    vec3 cloudCol = vec3(0.9);
    float t = time * 20.5;
    vec2 sunPos = p - vec2(0.4 * cos(t * 0.1), 0.4 * sin(t * 0.1));
    float sun = circle(sunPos, 0.03);
    float mountain1 = sinwave(p - vec2(0.5, -0.1), 5.0, 0.1);
    float mountain2 = sinwave(p + vec2(0.0, 0.2), 4.0, 0.2);
    float mountain3 = sinwave(p + vec2(0.0, -0.3), -4.5, 0.1);
    float cloud = 0.8 + smoke.r;
//     col = mix(background, sunCol, sun);
    vec3 smoke2 = smokeEffect(p + vec2(-1.0, -2.0));
    float cloud2 = 0.7 + smoke2.r;
//     col = mix(mountCol * 1.9, background, mountain3);
    col = mix(mountCol * 0.9, background, mountain1);
    col = mix(cloudCol, col, cloud);
    col = mix(mountCol, col, mountain2);
    col = mix(cloudCol, col, cloud2);
    float rando = rand(vec2(uv.x, uv.y));
//     col *= 0.2 + 0.8 * pow(32.0 * uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y), 0.2);
    gl_FragColor = vec4(col - rando * 0.1, 1.0);
}
`);





//--------------------//
//--blue-puddles-2----//
//--débuts-lancinants-//
//--------------------//
setBothShaders(`
precision mediump float;
varying vec2 vTexCoord;
uniform float time;
const float TURBULENCE = 0.009;
//noise function from iq: https://www.shadertoy.com/view/Msf3WH
vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}
float noise(vec2 p) {
    const float K1 = 0.366025404;
    const float K2 = 0.211324865;
    vec2 i = floor(p + (p.x + p.y) * K1);
    vec2 a = p - i + (i.x + i.y) * K2;
    float m = step(a.y, a.x);
    vec2 o = vec2(m, 1.0 - m);
    vec2 b = a - o + K2;
    vec2 c = a - 1.0 + 2.0 * K2;
    vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
    vec3 n = h * h * h * h * vec3(dot(a, hash(i + 0.0)), dot(b, hash(i + o)), dot(c, hash(i + 1.0)));
    return dot(n, vec3(70.0));
}
const mat2 m2 = mat2(1.6,  1.2, -1.2,  1.6);
float fbm(vec2 p) {
    float amp = 0.5;
    float h = 0.0;
    for (int i = 0; i < 8; i++) {
        float n = noise(p);
        h += amp * n;
        amp *= 0.5;
        p = m2 * p;
    }
	return  0.5 + 0.5 * h;
}
vec3 smokeEffect(vec2 uv) {
    vec3 col = vec3(0.0, 0.0, 0.0);
    // time scale
    float v = 0.0002;
    vec3 smoke = vec3(1.0);
    //uv += mo * 10.0;
    vec2 scale = uv * 0.5;
    vec2 turbulence = TURBULENCE * vec2(noise(vec2(uv.x * 3.5, uv.y * 3.2) * 1.), noise(vec2(uv.x * 2.2, uv.y * 1.5)));
    scale += turbulence;
    float n1 = fbm(vec2(scale.x - abs(sin(time * v * 1000.0)), scale.y - 50.0 * abs(sin(time * v * 410.0))));
    col = mix(col, smoke, smoothstep(0.35, 0.9, n1));
    //float y = fragCoord.y/iResolution.y;
    //float fade = exp(-(y*y));
    //col *= fade;
//     col.r * 0.5;
    col = clamp(col, vec3(0.0), vec3(1.0)) * 2.;
    return col;
}
float circle(vec2 p, float r) {
    float c = length(p) - r;
    return smoothstep(r + 0.02, r, c);
}
float sinwave(vec2 p, float scale, float amp) {
    float wave = cos(p.x * scale + 0.5) + 0.25 * cos(p.x * scale * scale);
    float s = smoothstep(amp + 0.04, amp, amp * wave - p.y);
    return s;
}
float plot(vec2 s, float p) {
    float largeur = abs(sin(time * 0.01)) * 0.1 + 0.1;
    return smoothstep(p - largeur, p, s.y) - smoothstep(p, p + largeur, s.y);
}
float circ(float speed, float size, float vx, float vy, float dist) {
  // float x = cos(time * speed) * dist * 0.012 - 0.425;
  // float y = sin(time * speed) * dist * 0.012 - 0.25;
  float t = time;
  float x = cos(t * speed * 1000.0) * dist * (sin(t)) * 0.12 - 0.425;
  float y = sin(t * speed * 1000.0) * dist * (sin(t)) * 0.12 - 0.25;
  // float x = cos(time * speed) * dist * abs(sin(time * 0.01) * 1.0) - 0.425;
  // float y = sin(time * speed) * dist * abs(sin(time * 0.01) * 1.0) - 0.25;
  vec2 v = vec2(vx + x, vy + y);
  float d = 1.0 / length(v * size);
     d = sin(d * cos(t * 5.) * 1.);
  return d;
}
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    vec2 uv = gl_FragCoord.xy / vec2(1600, 1600);
    vec2 p = gl_FragCoord.xy/1000.0;
    p -= 0.5;
//     p.x *= 2.0;
    p *= 2.0;
//     p.x *= iResolution.x / iResolution.y;
    vec3 col = vec3(0.0);
    vec3 smoke = smokeEffect(p);
//     vec3 tex = 0.02 * texture(iChannel0, uv * 2.5).rgb;   
    vec3 background = 0.7 * vec3(0.0, 0.0, 100.0) / 255.0;
    vec3 mountCol = mix(vec3(102.0, 153.0, 253.0) / 255.0, vec3(253.0 ,004.0 ,0.0) / 255.0, p.y + 0.5);
    vec3 sunCol = 0.85 * mix(vec3(1.0, 0.0, 1.0), vec3(1.0, 1.0, 0.0), p.y + 0.5);
    vec3 cloudCol = vec3(0.9);
    float t = time * 20.5;
    vec2 sunPos = p - vec2(0.4 * cos(t * 0.1), 0.4 * sin(t * 0.1));
    float sun = circle(sunPos, 0.03);
    float mountain1 = sinwave(p - vec2(0.5, -0.1), 5.0, 0.1);
    float mountain2 = sinwave(p + vec2(0.0, 0.2), 4.0, 0.2);
    float mountain3 = sinwave(p + vec2(0.0, -0.3), -4.5, 0.1);
    float cloud = 0.8 + smoke.r;
//     col = mix(background, sunCol, sun);
    vec3 smoke2 = smokeEffect(p + vec2(-1.0, -2.0));
    float cloud2 = 0.7 + smoke2.r;
    col = mix(mountCol * 1.9, background, mountain3);
    col = mix(mountCol * 0.9, col, mountain1);
    col = mix(cloudCol, col, cloud);
    col = mix(mountCol, col, mountain2);
    col = mix(cloudCol, col, cloud2);
    float rando = rand(vec2(uv.x, uv.y));
//     col *= 0.2 + 0.8 * pow(32.0 * uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y), 0.2);
    gl_FragColor = vec4(col - rando * 0.1, 1.0);
}
`);







//--------------------//
//--blue-puddles-2----//
//--débuts-lancinants-//
//--------------------//
setBothShaders(`
precision mediump float;
varying vec2 vTexCoord;
uniform float time;
const float TURBULENCE = 0.009;
//noise function from iq: https://www.shadertoy.com/view/Msf3WH
vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}
float noise(vec2 p) {
    const float K1 = 0.366025404;
    const float K2 = 0.211324865;
    vec2 i = floor(p + (p.x + p.y) * K1);
    vec2 a = p - i + (i.x + i.y) * K2;
    float m = step(a.y, a.x);
    vec2 o = vec2(m, 1.0 - m);
    vec2 b = a - o + K2;
    vec2 c = a - 1.0 + 2.0 * K2;
    vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
    vec3 n = h * h * h * h * vec3(dot(a, hash(i + 0.0)), dot(b, hash(i + o)), dot(c, hash(i + 1.0)));
    return dot(n, vec3(70.0));
}
const mat2 m2 = mat2(1.6,  1.2, -1.2,  1.6);
float fbm(vec2 p) {
    float amp = 0.5;
    float h = 0.0;
    for (int i = 0; i < 8; i++) {
        float n = noise(p);
        h += amp * n;
        amp *= 0.5;
        p = m2 * p;
    }
	return  0.5 + 0.5 * h;
}
vec3 smokeEffect(vec2 uv) {
    vec3 col = vec3(0.0, 0.0, 0.0);
    // time scale
    float v = 0.0002;
    vec3 smoke = vec3(1.0);
    //uv += mo * 10.0;
    vec2 scale = uv * 0.5;
    vec2 turbulence = TURBULENCE * vec2(noise(vec2(uv.x * 3.5, uv.y * 3.2) * 1.), noise(vec2(uv.x * 2.2, uv.y * 1.5)));
    scale += turbulence;
    float n1 = fbm(vec2(scale.x - abs(sin(time * v * 1000.0)), scale.y - 50.0 * abs(sin(time * v * 410.0))));
    col = mix(col, smoke, smoothstep(0.35, 0.9, n1));
    //float y = fragCoord.y/iResolution.y;
    //float fade = exp(-(y*y));
    //col *= fade;
//     col.r * 0.5;
    col = clamp(col, vec3(0.0), vec3(1.0)) * 2.;
    return col;
}
float circle(vec2 p, float r) {
    float c = length(p) - r;
    return smoothstep(r + 0.02, r, c);
}
float sinwave(vec2 p, float scale, float amp) {
    float wave = cos(p.x * scale + 0.5 + time * 20.) + 0.25 * cos(p.x * scale * scale + time * 20.);
    float s = smoothstep(amp + 0.04, amp, amp * wave - p.y);
    return s;
}
float plot(vec2 s, float p) {
    float largeur = abs(sin(time * 0.01)) * 0.1 + 0.1;
    return smoothstep(p - largeur, p, s.y) - smoothstep(p, p + largeur, s.y);
}
float circ(float speed, float size, float vx, float vy, float dist) {
  // float x = cos(time * speed) * dist * 0.012 - 0.425;
  // float y = sin(time * speed) * dist * 0.012 - 0.25;
  float t = time;
  float x = cos(t * speed * 1000.0) * dist * (sin(t)) * 0.12 - 0.425;
  float y = sin(t * speed * 1000.0) * dist * (sin(t)) * 0.12 - 0.25;
  // float x = cos(time * speed) * dist * abs(sin(time * 0.01) * 1.0) - 0.425;
  // float y = sin(time * speed) * dist * abs(sin(time * 0.01) * 1.0) - 0.25;
  vec2 v = vec2(vx + x, vy + y);
  float d = 1.0 / length(v * size);
     d = sin(d * cos(t * 5.) * 1.);
  return d;
}
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    vec2 uv = gl_FragCoord.xy / vec2(1600, 1600);
    vec2 p = gl_FragCoord.xy/1000.0;
    p -= 0.5;
//     p.x *= 2.0;
    p *= 2.0;
//     p.x *= iResolution.x / iResolution.y;
    vec3 col = vec3(0.0);
    vec3 smoke = smokeEffect(p);
//     vec3 tex = 0.02 * texture(iChannel0, uv * 2.5).rgb;   
    vec3 background = 0.7 * vec3(0.0, 0.0, 100.0) / 255.0;
    vec3 mountCol = mix(vec3(102.0, 153.0, 253.0) / 255.0, vec3(253.0 ,004.0 ,0.0) / 255.0, p.y + 0.5);
    vec3 sunCol = 0.85 * mix(vec3(1.0, 0.0, 1.0), vec3(1.0, 1.0, 0.0), p.y + 0.5);
    vec3 cloudCol = vec3(0.9);
    float t = time * 20.5;
    vec2 sunPos = p - vec2(0.4 * cos(t * 0.1), 0.4 * sin(t * 0.1));
    float sun = circle(sunPos, 0.03);
    float mountain1 = sinwave(p - vec2(0.5, -0.1), 5.0, 0.1);
    float mountain2 = sinwave(p + vec2(0.0, 0.2), 4.0, 0.2);
    float mountain3 = sinwave(p + vec2(0.0, -0.3), -4.5, 0.1);
    float cloud = 0.8 + smoke.r;
//     col = mix(background, sunCol, sun);
    vec3 smoke2 = smokeEffect(p + vec2(-1.0, -2.0));
    float cloud2 = 0.7 + smoke2.r;
    col = mix(mountCol * 1.9, background, mountain3);
    col = mix(mountCol * 0.9, col, mountain1);
    col = mix(cloudCol, col, cloud);
    col = mix(mountCol, col, mountain2);
    col = mix(cloudCol, col, cloud2);
    float rando = rand(vec2(uv.x, uv.y) * 100.);
//     col *= 0.2 + 0.8 * pow(32.0 * uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y), 0.2);
    gl_FragColor = vec4(col - rando * 0.1, 1.0);
//     gl_FragColor = gl_FragColor.brga;
//     gl_FragColor = gl_FragColor.grba;
//         gl_FragColor = gl_FragColor.bgra;
}
`);




//--------------------//
//--blue-puddles-2----//
//--débuts-lancinants-//
//--------------------//
setBothShaders(`
precision mediump float;
varying vec2 vTexCoord;
uniform float time;
const float TURBULENCE = 0.009;
//noise function from iq: https://www.shadertoy.com/view/Msf3WH
vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}
float noise(vec2 p) {
    const float K1 = 0.366025404;
    const float K2 = 0.211324865;
    vec2 i = floor(p + (p.x + p.y) * K1);
    vec2 a = p - i + (i.x + i.y) * K2;
    float m = step(a.y, a.x);
    vec2 o = vec2(m, 1.0 - m);
    vec2 b = a - o + K2;
    vec2 c = a - 1.0 + 2.0 * K2;
    vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
    vec3 n = h * h * h * h * vec3(dot(a, hash(i + 0.0)), dot(b, hash(i + o)), dot(c, hash(i + 1.0)));
    return dot(n, vec3(70.0));
}
const mat2 m2 = mat2(1.6,  1.2, -1.2,  1.6);
float fbm(vec2 p) {
    float amp = 0.5;
    float h = 0.0;
    for (int i = 0; i < 8; i++) {
        float n = noise(p);
        h += amp * n;
        amp *= 0.5;
        p = m2 * p;
    }
	return  0.5 + 0.5 * h;
}
vec3 smokeEffect(vec2 uv) {
    vec3 col = vec3(0.0, 0.0, 0.0);
    // time scale
    float v = 0.0002;
    vec3 smoke = vec3(1.0);
    //uv += mo * 10.0;
    vec2 scale = uv * 0.5;
    vec2 turbulence = TURBULENCE * vec2(noise(vec2(uv.x * 3.5, uv.y * 3.2) * 1.), noise(vec2(uv.x * 2.2, uv.y * 1.5)));
    scale += turbulence;
    float n1 = fbm(vec2(scale.x - abs(sin(time * v * 1000.0)), scale.y - 50.0 * abs(sin(time * v * 410.0))));
    col = mix(col, smoke, smoothstep(0.35, 0.9, n1));
    //float y = fragCoord.y/iResolution.y;
    //float fade = exp(-(y*y));
    //col *= fade;
//     col.r * 0.5;
    col = clamp(col, vec3(0.0), vec3(1.0)) * 2.;
    return col;
}
float circle(vec2 p, float r) {
    float c = length(p) - r;
    return smoothstep(r + 0.02, r, c);
}
float sinwave(vec2 p, float scale, float amp) {
    float wave = cos(p.x * scale + 0.5 + time * 20.) + 0.25 * cos(p.x * scale * scale + time * 20.);
    float s = smoothstep(amp + 0.04, amp, amp * wave * 3. - p.y);
    return s;
}
float plot(vec2 s, float p) {
    float largeur = abs(sin(time * 0.01)) * 0.1 + 0.1;
    return smoothstep(p - largeur, p, s.y) - smoothstep(p, p + largeur, s.y);
}
float circ(float speed, float size, float vx, float vy, float dist) {
  // float x = cos(time * speed) * dist * 0.012 - 0.425;
  // float y = sin(time * speed) * dist * 0.012 - 0.25;
  float t = time;
  float x = cos(t * speed * 1000.0) * dist * (sin(t)) * 0.12 - 0.425;
  float y = sin(t * speed * 1000.0) * dist * (sin(t)) * 0.12 - 0.25;
  // float x = cos(time * speed) * dist * abs(sin(time * 0.01) * 1.0) - 0.425;
  // float y = sin(time * speed) * dist * abs(sin(time * 0.01) * 1.0) - 0.25;
  vec2 v = vec2(vx + x, vy + y);
  float d = 1.0 / length(v * size);
     d = sin(d * cos(t * 5.) * 1.);
  return d;
}
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    vec2 uv = gl_FragCoord.xy / vec2(1600, 1600);
    vec2 p = gl_FragCoord.xy/1000.0;
    p -= 0.5;
//     p.x *= 2.0;
    p *= 2.0;
//     p.x *= iResolution.x / iResolution.y;
    vec3 col = vec3(0.0);
    vec3 smoke = smokeEffect(p);
//     vec3 tex = 0.02 * texture(iChannel0, uv * 2.5).rgb;   
    vec3 background = 0.7 * vec3(0.0, 0.0, 100.0) / 255.0;
    vec3 mountCol = mix(vec3(102.0, 153.0, 253.0) / 255.0, vec3(253.0 ,004.0 ,0.0) / 255.0, p.y + 0.5);
    vec3 sunCol = 0.85 * mix(vec3(1.0, 0.0, 1.0), vec3(1.0, 1.0, 0.0), p.y + 0.5);
    vec3 cloudCol = vec3(0.9);
    float t = time * 20.5;
    vec2 sunPos = p - vec2(0.4 * cos(t * 0.1), 0.4 * sin(t * 0.1));
    float sun = circle(sunPos, 0.03);
    float mountain1 = sinwave(p - vec2(0.5, -0.1), 5.0, 0.1);
    float mountain2 = sinwave(p + vec2(0.0, 0.2), 4.0, 0.2);
    float mountain3 = sinwave(p + vec2(-12.0, -0.5), -4.5, 0.1);
    float cloud = 0.8 + smoke.r;
//     col = mix(background, sunCol, sun);
    vec3 smoke2 = smokeEffect(p + vec2(-1.0, -2.0));
    float cloud2 = 0.7 + smoke2.r;
    col = mix(mountCol * 1.9, background, mountain3);
    col = mix(mountCol * 0.9, col, mountain1);
    col = mix(cloudCol, col, cloud);
    col = mix(mountCol, col, mountain2);
    col = mix(cloudCol, col, vec3(cloud2 * 0.85, cloud2 * 0.85, cloud2 * 4.0));
    float rando = rand(vec2(uv.x, uv.y) * 100.);
//     col *= 0.2 + 0.8 * pow(32.0 * uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y), 0.2);
    gl_FragColor = vec4(col - rando * 0.1, 1.0);
//     gl_FragColor = gl_FragColor.brga;
//     gl_FragColor = gl_FragColor.grba;
//         gl_FragColor = gl_FragColor.gbra;
}
`);







//--------------------//
//--blue-puddles-2----//
//--débuts-lancinants-//
//--------------------//
setBothShaders(`
precision mediump float;
varying vec2 vTexCoord;
uniform float time;
const float TURBULENCE = 0.009;
//noise function from iq: https://www.shadertoy.com/view/Msf3WH
vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}
float noise(vec2 p) {
    const float K1 = 0.366025404;
    const float K2 = 0.211324865;
    vec2 i = floor(p + (p.x + p.y) * K1);
    vec2 a = p - i + (i.x + i.y) * K2;
    float m = step(a.y, a.x);
    vec2 o = vec2(m, 1.0 - m);
    vec2 b = a - o + K2;
    vec2 c = a - 1.0 + 2.0 * K2;
    vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
    vec3 n = h * h * h * h * vec3(dot(a, hash(i + 0.0)), dot(b, hash(i + o)), dot(c, hash(i + 1.0)));
    return dot(n, vec3(70.0));
}
const mat2 m2 = mat2(1.6,  1.2, -1.2,  1.6);
float fbm(vec2 p) {
    float amp = 0.5;
    float h = 0.0;
    for (int i = 0; i < 8; i++) {
        float n = noise(p);
        h += amp * n;
        amp *= 0.5;
        p = m2 * p;
    }
	return  0.5 + 0.5 * h;
}
vec3 smokeEffect(vec2 uv) {
    vec3 col = vec3(0.0, 0.0, 0.0);
    // time scale
    float v = 0.0002;
    vec3 smoke = vec3(1.0);
    //uv += mo * 10.0;
    vec2 scale = uv * 0.5;
    vec2 turbulence = TURBULENCE * vec2(noise(vec2(uv.x * 3.5, uv.y * 3.2) * 1.), noise(vec2(uv.x * 2.2, uv.y * 1.5)));
    scale += turbulence;
    float n1 = fbm(vec2(scale.x - abs(sin(time * v * 1000.0)), scale.y - 50.0 * abs(sin(time * v * 410.0))));
    col = mix(col, smoke, smoothstep(0.35, 0.9, n1));
    //float y = fragCoord.y/iResolution.y;
    //float fade = exp(-(y*y));
    //col *= fade;
//     col.r * 0.5;
    col = clamp(col, vec3(0.0), vec3(1.0)) * 2.;
    return col;
}
float circle(vec2 p, float r) {
    float c = length(p) - r;
    return smoothstep(r + 0.02, r, c);
}
float sinwave(vec2 p, float scale, float amp) {
    float wave = cos(p.x * scale + 1.5 + time * 20.) + 0.25 * cos(p.x * scale * scale + time * 20.);
    float s = smoothstep(amp + 0.01, amp, amp * wave * 0.5 - p.y * 0.5);
    return s;
}
float plot(vec2 s, float p) {
    float largeur = abs(sin(time * 0.01)) * 0.1 + 0.1;
    return smoothstep(p - largeur, p, s.y) - smoothstep(p, p + largeur, s.y);
}
float circ(float speed, float size, float vx, float vy, float dist) {
  // float x = cos(time * speed) * dist * 0.012 - 0.425;
  // float y = sin(time * speed) * dist * 0.012 - 0.25;
  float t = time;
  float x = cos(t * speed * 1000.0) * dist * (sin(t)) * 0.12 - 0.425;
  float y = sin(t * speed * 1000.0) * dist * (sin(t)) * 0.12 - 0.25;
  // float x = cos(time * speed) * dist * abs(sin(time * 0.01) * 1.0) - 0.425;
  // float y = sin(time * speed) * dist * abs(sin(time * 0.01) * 1.0) - 0.25;
  vec2 v = vec2(vx + x, vy + y);
  float d = 1.0 / length(v * size);
     d = sin(d * cos(t * 5.) * 1.);
  return d;
}
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    vec2 uv = gl_FragCoord.xy / vec2(1600, 1600);
    vec2 p = gl_FragCoord.xy/1000.0;
    p -= 0.5;
//     p.x *= 2.0;
    p *= 2.0;
//     p.x *= iResolution.x / iResolution.y;
    vec3 col = vec3(0.0);
    vec3 smoke = smokeEffect(p);
//     vec3 tex = 0.02 * texture(iChannel0, uv * 2.5).rgb;   
    vec3 background = 0.7 * vec3(0.0, 100.0, 200.0) / 255.0;
    vec3 mountCol = mix(vec3(12.0, 153.0, 253.0) / 255.0, vec3(253.0 ,104.0 ,50.0) / 255.0, p.y + 0.5);
    vec3 sunCol = 0.85 * mix(vec3(1.0, 0.0, 1.0), vec3(1.0, 1.0, 0.0), p.y + 0.5);
    vec3 cloudCol = vec3(0.9);
    float t = time * 20.5;
    vec2 sunPos = p - vec2(0.4 * cos(t * 0.1), 0.4 * sin(t * 0.1));
    float sun = circle(sunPos, 0.03);
    float mountain1 = sinwave(p - vec2(0.5, -0.1), 2.4, 0.1);
    float mountain2 = sinwave(p + vec2(0.0, 0.2), 2.0, 0.2);
    float mountain3 = sinwave(p + vec2(-12.0, -0.5), -2.5, 0.1);
    float cloud = 1.5 + smoke.r;
//     col = mix(background, sunCol, sun);
    vec3 smoke2 = smokeEffect(p + vec2(-1.0, -2.0));
    float cloud2 = 0.7 + smoke2.r;
    col = mix(mountCol * 1.2, background, mountain3);
    col = mix(mountCol * 0.9, col, mountain1);
    col = mix(cloudCol, col, cloud);
    col = mix(mountCol, col, mountain2);
    col = mix(cloudCol, col, vec3(cloud2 * 0.85, cloud2 * 0.85, cloud2 * 4.0));
    float rando = rand(vec2(uv.x, uv.y) * 100.);
//     col *= 0.2 + 0.8 * pow(32.0 * uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y), 0.2);
    gl_FragColor = vec4(col - rando * 0.1, 1.0);
    gl_FragColor = gl_FragColor.brga;
//     gl_FragColor = gl_FragColor.grba;
//         gl_FragColor = gl_FragColor.gbra;
}
`);