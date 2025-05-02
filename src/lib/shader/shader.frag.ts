export default `#version 300 es

precision highp float;

out vec4 fragColor;

uniform vec2 resolution;
uniform float time;

void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = (2.0 * fragCoord - resolution.xy) / min(resolution.x, resolution.y);

    for (float i = 1.0; i < 10.0; i++) {
        uv.x += 0.6 / i * cos(i * 2.5 * uv.y + time);
        uv.y += 0.6 / i * cos(i * 1.5 * uv.x + time);
    }

    vec3 color = vec3(0.1) / abs(sin(time - uv.y - uv.x));
    fragColor = vec4(color, 1.0);
}
`;
