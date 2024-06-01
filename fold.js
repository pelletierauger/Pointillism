drawDots = function() {
    vertices = [];
    let t = drawCount * 5e-5 + 10;
    let fx = 1, fy = 1, x = 1, y = 1;
    let num = 60000;
    for (let i = 0; i < num; i += 1) {
        let g = Math.tan(i * 25 + t * 1e4) * Math.cos(fx * 1e-4 + i * 1e-4);
        g = g * Math.sin(i * 2e-5) + i * 1e-5 + t * 11.4;
        x = Math.sin(g) * i * 0.00005 * 1.5;
        y = Math.cos(g) * i * 0.00015 * 1.5;
        x += Math.sin(fx * 1.5) * 0.5 + Math.cos(fx * 0.1);
        y += Math.sin(fy * 1.5) * 0.5 + Math.cos(fx * 0.1);
        fx = x;
        fy = y;
        x += Math.cos(t * (map(Math.sin(t * 1e6), -1, 1, 0, 0.2)) * x) * x * 0.1;
        y += Math.sin(t * (map(Math.sin(t * 1e6), -1, 1, 0, 0.2)) * y) * y * 0.1;
        vertices.push(x * 1.5 * 0.18 - 0.5, y * 0.8 * 0.15 - 0.19, 0.0);
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, num);
}


drawDots = function() {
    vertices = [];
    let t = drawCount * 5e-5 + 0;
    let fx = 1, fy = 1, x = 1, y = 1;
    let num = 60000;
    for (let i = 0; i < num; i += 1) {
        let g = Math.tan(i * 5 + t * 1e4) * Math.cos(fx * 1e-4 + i * 1e-4);
        g = g * Math.sin(i * 2e-5) + i * 1e-5 + t * 11.4;
        x = Math.sin(g) * i * 0.00005 * 1.2;
        y = Math.cos(g) * i * 0.00015 * 1.2;
        x += Math.sin(fx * 1.5) * 0.5 + Math.cos(fx * 0.1);
        y += Math.sin(fy * 1.5) * 0.5 + Math.cos(fx * 0.1);
        fx = x;
        fy = y;
        x += Math.cos(t * (map(Math.sin(t * 0.5e6), -1, 1, 0, 0.5) * 2000) * x) * x * 0.1;
        y += Math.sin(t * (map(Math.sin(t * 0.5e6), -1, 1, 0, 0.5) * 2000) * y) * y * 0.1;
        vertices.push(x * 1.5 * 0.18 - 0.125, y * 0.8 * 0.15 - 0.19, 0.0);
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, num);
}

drawDots = function() {
    vertices = [];
    let t = drawCount * 5e-5 + 0;
    let fx = 1, fy = 1, x = 1, y = 1;
    let num = 60000;
    for (let i = 0; i < num; i += 1) {
        let g = Math.tan(i * 1e-2 + t * 1e4) * Math.cos(fx * 1e-1 + i * 1e-5);
        g = g * Math.sin(i * 2e-4) + i * 1e-3;
        x = Math.sin(g) * i * 0.00005 * 1.5;
        y = Math.cos(g) * i * 0.00015 * 1.5;
        x += Math.sin(fx * 1.5) * 0.5 + Math.cos(fx * 0.1);
        y += Math.sin(fy * 1.5) * 0.5 + Math.cos(fx * 0.1);
        fx = x;
        fy = y;
        x += Math.cos(t * (map(Math.sin(t * 0.5e6), -1, 1, 0, 0.5) * 2000) * x) * x * 0.1;
        y += Math.sin(t * (map(Math.sin(t * 0.5e6), -1, 1, 0, 0.5) * 2000) * y) * y * 0.1;
        vertices.push(x * 1.5 * 0.18 - 0.125, y * 0.8 * 0.15 - 0.19, 0.0);
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, num);
}

drawDots = function() {
    vertices = [];
    let t = drawCount * 1e-4 - 0;
    let fx = 1, fy = 1, x = 1, y = 1;
    let num = 60000;
    for (let i = 0; i < num; i += 1) {
        let g = Math.tan(i * 1e-2 + t * 1e4) * Math.cos(fx * 1e-1 + i * 1e-5);
        g = g * Math.sin(i * 2e-4) + i * 1e-3;
        x = Math.sin(g) * i * 0.00005 * 1.5;
        y = Math.cos(g) * i * 0.00015 * 1.5;
        x += Math.sin(fx * 1.5) * 0.5 + Math.cos(fx * 0.1);
        y += Math.sin(fy * 1.5) * 0.5 + Math.cos(fx * 0.1);
        fx = x;
        fy = y;
        x += Math.cos(t * (map(Math.sin(t * 0.5e6), -1, 1, 0, 0.5) * 2000) * x) * x * 0.1;
        y += Math.sin(t * (map(Math.sin(t * 0.5e6), -1, 1, 0, 0.5) * 2000) * y) * y * 0.1;
        vertices.push(x * 1.5 * 0.18 - 0.125, y * 0.8 * 0.15 - 0.19, 0.0);
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, num);
}

drawDots = function() {
    vertices = [];
    let t = drawCount * 5e-5 + 0;
    let fx = 1, fy = 1, x = 1, y = 1;
    let num = 60000;
    for (let i = 0; i < num; i += 1) {
        let g = Math.tan(i * 1e-2 + t * 1e4) * Math.cos(fx * 1e-1 + i * 1e-5);
        g = g * Math.sin(i * 2e-4) + i * 1e-2;
        x = Math.sin(g) * i * 0.00005 * 1.5;
        y = Math.cos(g) * i * 0.00015 * 1.5;
        x += Math.sin(fx * 1.5) * 0.5 + Math.cos(fx * 0.1);
        y += Math.sin(fy * 1.5) * 0.5 + Math.cos(fx * 0.1);
        fx = x;
        fy = y;
        x += Math.cos(t * (map(Math.sin(t * 0.125e6), -1, 1, 0, 0.5) * 2000) * x) * x * 0.1;
        y += Math.sin(t * (map(Math.sin(t * 0.125e6), -1, 1, 0, 0.5) * 2000) * y) * y * 0.1;
        vertices.push(x * 1.5 * 0.18 - 0.125, y * 0.8 * 0.15 - 0.19, 0.0);
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, num);
}


drawDots = function() {
    vertices = [];
    let t = drawCount * 5e-5 + 0;
    let fx = 1, fy = 1, x = 1, y = 1;
    let num = 20000;
    for (let i = 0; i < num; i += 1) {
        let g = Math.tan(i * 1e-2 + t * 1e4) * Math.cos(fx * 1e-1 + i * 1e-5);
        // g = g * Math.sin(i * 2e-3) + i * 1e-2;
        x = Math.sin(g) * i * 0.00005 * 1.5;
        y = Math.cos(g) * i * 0.00015 * 1.5;
        x += Math.sin(fx * 1.5) * 0.5 + Math.cos(fx * 0.1);
        y += Math.sin(fy * 1.5) * 0.5 + Math.cos(fx * 0.1);
        fx = x;
        fy = y;
        x += Math.cos(t * (map(Math.sin(t * 0.5e6), -1, 1, 0, 0.5) * 2000) * x) * x * 0.1;
        y += Math.sin(t * (map(Math.sin(t * 0.5e6), -1, 1, 0, 0.5) * 2000) * x) * y * 0.1;
        vertices.push(x * 1.5 * 0.18 - 0.125, y * 0.8 * 0.15 - 0.19, 0.0);
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, num);
}

drawDots = function() {
    vertices = [];
    let t = drawCount * 5e-5 + 0;
    let fx = 1, fy = 1, x = 1, y = 1;
    let num = 60000;
    for (let i = 0; i < num; i += 1) {
        let g = Math.cos(i * 1e-1 + t * 0.5e7) * Math.cos(fx * 1e-1 + i * 1e-5);
        g = g * Math.sin(i * 2e-3) + i * 1e-2;
        x = Math.sin(g) * i * 0.00005 * 1.5;
        y = Math.cos(g) * i * 0.00015 * 1.5;
        x += Math.sin(fx * 1.5) * 0.5 + Math.cos(fx * 0.1);
        y += Math.sin(fy * 1.5) * 0.5 + Math.cos(fx * 0.1);
        fx = x;
        fy = y;
        x += Math.cos(t * (map(Math.sin(t * 0.5e6), -1, 1, 0, 0.2) * 2000) * y) * x * 0.1;
        y += Math.sin(t * (map(Math.sin(t * 0.5e6), -1, 1, 0, 0.2) * 2000) * y) * y * 0.1;
        vertices.push(x * 1.5 * 0.18 - 0.35, y * 0.8 * 0.15 - 0.19, 0.0);
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, num);
}

drawDots = function() {
    vertices = [];
    let t = drawCount * 5e-5 + 0;
    let fx = 1, fy = 1, x = 1, y = 1;
    let num = 60000;
    for (let i = 0; i < num; i += 1) {
        let g = Math.cos(i * 1e-1 + t * 2e6);
        g = g * Math.sin(i * 2e-4) + i * 1e-2;
        x = Math.sin(g) * i * 0.000035 * 1.5;
        y = Math.cos(g) * i * 0.00015 * 1.5;
        // x += Math.sin(fx * 1.5) * 0.5 + Math.cos(fx * 0.1);
        // y += Math.sin(fy * 1.5) * 0.5 + Math.cos(fx * 0.1);
        fx = x;
        fy = y;
        x += Math.cos(t * (map(Math.sin(t * 0.5e6), -1, 1, 0, 0.2) * 2000) * y) * x * 0.1;
        y += Math.sin(t * (map(Math.sin(t * 0.5e6), -1, 1, 0, 0.2) * 2000) * y) * y * 0.1;
        vertices.push(x * 1.5 * 0.18, y * 0.8 * 0.15, 0.0);
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, num);
}

drawDots = function() {
    vertices = [];
    let t = drawCount * 5e-5 + 0;
    let fx = 1, fy = 1, x = 1, y = 1;
    let num = 60000;
    for (let i = 0; i < num; i += 1) {
        let g = Math.cos(i * 1e-2 + t * 1e6);
        g = g * Math.sin(i * 2e-4) + i * 1e-2;
        x = Math.sin(g) * i * 0.000035 * 2;
        y = Math.cos(g) * i * 0.00015 * 2;
        // x += Math.sin(fx * 1.5) * 0.5 + Math.cos(fx * 0.1);
        // y += Math.sin(fy * 1.5) * 0.5 + Math.cos(fx * 0.1);
        fx = x;
        fy = y;
        x += Math.cos(t * (map(Math.sin(t * 0.25e6), -1, 1, 0, 0.2) * 2000) * y) * x * 0.1;
        y += Math.sin(t * (map(Math.sin(t * 0.25e6), -1, 1, 0, 0.2) * 2000) * y) * y * 0.1;
        vertices.push(x * 1.5 * 0.18, y * 0.8 * 0.15, 0.0);
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, num);
}

drawDots = function() {
    vertices = [];
    let t = drawCount * 5e-5 + 0;
    let fx = 1, fy = 1, x = 1, y = 1;
    let num = 60000;
    for (let i = 0; i < num; i += 1) {
        let g = Math.cos(i * 1e-2 + t * 1e6);
        g = g * Math.sin(i * 2e-4) + i * 1e-2;
        x = Math.sin(g) * i * 0.000035 * 2;
        y = Math.cos(g) * i * 0.00015 * 2;
        // x += Math.sin(fx * fx * 0.5);
        y += Math.sin(fy * fy * 0.25);
        fx = x;
        fy = y;
        x += Math.cos(t * (map(Math.sin(t * 0.25e6), -1, 1, 0, 0.2) * 2000) * y) * x * 0.1;
        y += Math.sin(t * (map(Math.sin(t * 0.25e6), -1, 1, 0, 0.2) * 2000) * y) * y * 0.1;
        vertices.push(x * 1.5 * 0.18, y * 0.8 * 0.15, 0.0);
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, num);
}

drawDots = function() {
    vertices = [];
    let t = drawCount * 5e-5 + 0;
    let fx = 1, fy = 1, x = 1, y = 1;
    let num = 60000;
    for (let i = 0; i < num; i += 1) {
        let g = Math.tan(i * 1e-1);
        g = g * Math.tan(i * 2e-4);
        x = Math.sin(g + t * 1e5) * i * 0.000035 * 2;
        y = Math.cos(g + t * 1e5) * i * 0.00015 * 2;
        // x += Math.sin(fx * fx * 0.5);
        // y += Math.sin(fy * fy * 0.25);
        fx = x;
        fy = y;
        x += cos(t * 4e5) * i * 2e-5;
        y += sin(t * 4e5) * i * 2e-5;
        x += Math.cos(t * (map(Math.sin(t * 0.25e6), -1, 1, 0, 0.1) * 2000) * y) * x * 0.1;
        y += Math.sin(t * (map(Math.sin(t * 0.25e6), -1, 1, 0, 0.1) * 2000) * y) * y * 0.1;
        vertices.push(x * 1.5 * 0.22 * 1.075, y * 0.8 * 0.15 * 1.075, 0.0);
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, num);
}


drawDots = function() {
    vertices = [];
    let t = drawCount * 5e-5 + 0;
    let fx = 1, fy = 1, x = 1, y = 1;
    let num = 60000;
    for (let i = 0; i < num; i += 1) {
        let g = Math.tan(i * 4e1);
        g = g * Math.tan(i * 4e1);
        x = Math.sin(g) * i * 0.000035 * 2;
        y = Math.cos(g) * i * 0.00015 * 2;
        x += Math.sin(fx * 1) * map(sin(t * 1e4), -1, 1, 0, 1);
        y += Math.sin(fy * 1) * map(sin(t * 1e4), -1, 1, 0, 1);
        fx = x;
        fy = y;
        x += cos(t * 4e5) * i * 4e-5;
        y += sin(t * 4e5) * i * 4e-5;
        x += Math.cos(t * (map(Math.sin(t * 0.25e6), -1, 1, 0, 0.1) * 2000) * y) * x * 0.1;
        y += Math.sin(t * (map(Math.sin(t * 0.25e6), -1, 1, 0, 0.1) * 2000) * y) * y * 0.1;
        vertices.push(x * 1.5 * 0.22 * 1.075, y * 0.8 * 0.15 * 1.075, 0.0);
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, num);
}

drawDots = function() {
    vertices = [];
    let t = drawCount * 5e-5 + 0;
    let fx = 1, fy = 1, x = 1, y = 1;
    let num = 60000;
    for (let i = 0; i < num; i += 1) {
        let g = Math.tan(i * 4e1);
        // g = g * Math.tan(i * 4e1);
        x = Math.tan(Math.sin(g) * 2) * i * 0.000035 * 2;
        y = Math.tan(Math.cos(g) * 2) * i * 0.00015 * 2;
        x += Math.sin(fx * 1) * map(sin(t * 1e4), -1, 1, 0, 1);
        y += Math.sin(fy * 1) * map(sin(t * 1e4), -1, 1, 0, 1);
        fx = x;
        fy = y;
        x += cos(t * 4e5) * i * 8e-5;
        y += sin(t * 4e5) * i * 8e-5 * 5;
        // x += Math.cos(t * (map(Math.sin(t * 0.25e6), -1, 1, 0, 0.1) * 2000) * x) * x * 0.1;
        // y += Math.sin(t * (map(Math.sin(t * 0.25e6), -1, 1, 0, 0.1) * 2000) * y) * y * 0.1;
        vertices.push(x * 1.5 * 0.22 * 0.25, y * 0.8 * 0.15 * 0.25, 0.0);
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, num);
}






xx = 0;
tt = 0;
drawDots = function() {
    vertices = [];
    // let t = drawCount * 5e-5 + 0;
    // let fx = 1, fy = 1, x = 1, y = 1;
    let num = 20000;
    // for (let i = 0; i < num; i += 1) {
    let sr = 44100;
    let t = tt * sr / 30 / 3 / 2;
    for (let i = 0; i < num; i++) {
        let ti = map(t, 0, sr * 4, 0, 0.001);
        var x = Math.cos(t * Math.sin(i * ti) + Math.sin(i * 1e-5) + xx) * i * 1 * ti;
        var y = Math.sin(t * Math.sin(i * ti) + Math.sin(i * 1e-5) + xx) * i * 1 * ti;
        var angle = Math.atan2(x, y);
        var di = dist(0, 0, x, y);
        xx = x;
        // samp = samp + (sin(angle * di) * 1e-3);
        vertices.push(x * 1.5 * 0.22, y * 2.5 * 0.22, 0.0);
    }
    tt++;
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, num);
}


// L'automne avec Isidore

drawDots = function() {
    vertices = [];
    let t = (drawCount + 1e3) * 5e-5 + 10;
    let fx = 1, fy = 1, x = 1, y = 1;
    let num = 60000;
    for (let i = 0; i < num; i += 1) {
        let g = Math.tan(i * 50 + t * 1e4) + Math.cos(fx * 1e-4 + i * 1e-4);
        g = g * Math.sin(i * 1e-4) + i * 1e-5 + t * 11.4;
        x = Math.sin(g * 0.01 * g) * i * 0.00005 * 1.5;
        y = Math.cos(g * 0.01 * g) * i * 0.00015 * 1.5;
        x += Math.sin(fx * 1.5) * 0.5 * Math.cos(fx * 0.1);
        y += Math.sin(fy * 1.5) * 0.5 * Math.cos(fx * 0.1);
        fx = x;
        fy = y;
        // x += Math.cos(t * (map(Math.sin(t * 1e6), -1, 1, 0, 0.2)) * x) * x * 0.1;
        // y += Math.sin(t * (map(Math.sin(t * 1e6), -1, 1, 0, 0.2)) * y) * y * 0.1;
        vertices.push(x * 1.5 * 0.18 - 0.125, y * 0.8 * 0.15 - 0.05, 0.0);
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, num);
}

drawDots = function() {
    vertices = [];
    let t = (drawCount + 1e3) * 5e-5 + 10;
    let fx = 1, fy = 1, x = 1, y = 1;
    let num = 60000;
    let count = 0;
    for (let i = 0; i < num; i += 1) {
        let g = Math.tan(i * 50 + t * 1e4) + Math.cos(fx * 1e-4 + i * 1e-4);
        g = g * Math.sin(i * 1e-4) + i * 1e-5 + t * 11.4;
        x = Math.sin(g * 0.01 * g) * i * 0.00005 * 1.5;
        y = Math.cos(g * 0.01 * g) * i * 0.00015 * 1.5;
        x += Math.sin(fx * 1.5) * 0.5 * Math.cos(fx * 0.1);
        y += Math.sin(fy * 1.5) * 0.5 * Math.cos(fx * 0.1);
        fx = x;
        fy = y;
        // x += Math.cos(t * (map(Math.sin(t * 1e6), -1, 1, 0, 0.2)) * x) * x * 0.1;
        // y += Math.sin(t * (map(Math.sin(t * 1e6), -1, 1, 0, 0.2)) * y) * y * 0.1;
        // x *= (10/16);
        x *= (Math.sin(t * 2e5) + 1 + 0.85); y *=(Math.sin(t * 2e5) + 1 + 0.85);
        if (dist(0, 0, x / (10/16), y) < 6){
            vertices.push(x * 0.8 * 0.15, y * 0.8 * 0.15, 0.0);
            count++;
        }
    }
    // logJavaScriptConsole(count);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, count);
}




drawCount = 1;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 60000;
    function ro(a, l, x, y, h) {
        return {
            x: x + Math.cos(h + a) * l,
            y: y + Math.sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (10 - t) * 1000000;
    let rayInc = Math.PI * 2 / amountRays;
    let numV = 0;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        let jj = j - sj;
        metaV[indMetaV] = [];
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 2.9 * Math.tan(i * jj * 0.0125 * 0.75) * 0.5;
            let l = 0.5 + Math.tan(i * jj * 0.0125 * 0.75) * 1.5;
            p = ro(a, l, p.x * 0.991, p.y * 0.991, p.h * map(i, 270, num / amountRays, 0, 1));
            p.x += Math.cos(t * 12e6) * 0.5;
            p.y += -0.4 + Math.sin(t * 12e6) * 0.5;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.005, p.y * 0.8 * 0.005, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    let flatV = [];
    for (let j = 0; j < metaV[0].length; j += 3) {
        for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
    }
    vertices = flatV;
    // Create an empty buffer object to store the vertex buffer
    // var vertex_buffer = gl.createBuffer();
    //Bind appropriate array buffer to it
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Pass the vertex data to the buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // Unbind the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    /*======== Associating shaders to buffer objects ========*/
    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Get the attribute location
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
    gl.drawArrays(gl.POINTS, 0, num);
}



drawCount = 1;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 60000;
    function ro(a, l, x, y, h) {
        return {
            x: x + Math.cos(h + a) * l,
            y: y + Math.sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (10 - t) * 1000000;
    let rayInc = Math.PI * 2 / amountRays;
    let numV = 0;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        let jj = j - sj;
        metaV[indMetaV] = [];
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 2.9 * Math.tan(i * 0.1e-1 + jj * 0.25) * 0.5;
            let l = 0.5 + Math.tan(i * 0.1e-1 + jj * 0.25) * 1.5;
            p = ro(a, l, p.x * 0.991, p.y * 0.991, p.h * map(i, 270, num / amountRays, 0, 1));
            p.x += Math.cos(t * 12e6) * 0.5;
            p.y += -0.4 + Math.sin(t * 12e6) * 0.5;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.005, p.y * 0.8 * 0.005, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    let flatV = [];
    for (let j = 0; j < metaV[0].length; j += 3) {
        for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
    }
    vertices = flatV;
    // Create an empty buffer object to store the vertex buffer
    // var vertex_buffer = gl.createBuffer();
    //Bind appropriate array buffer to it
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Pass the vertex data to the buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // Unbind the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    /*======== Associating shaders to buffer objects ========*/
    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Get the attribute location
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
    gl.drawArrays(gl.POINTS, 0, num);
}




drawCount = 1;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 60000;
    function ro(a, l, x, y, h) {
        return {
            x: x + Math.cos(h + a) * l,
            y: y + Math.sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (10 - t) * 1000000;
    let rayInc = Math.PI * 2 / amountRays;
    let numV = 0;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        let jj = j - sj;
        metaV[indMetaV] = [];
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 2.9 * Math.tan(i * jj * 0.0125 * 0.75) * 0.5 + p.x * 1e-2;
            let l = 0.5 + Math.tan(i * jj * 0.0125 * 0.75) * 1.5 + p.x * 1e-2;
            p = ro(a, l, p.x * 0.991, p.y * 0.991, p.h * map(i, 270, num / amountRays, 0, 1));
            p.x += Math.cos(t * 12e6) * 0.5;
            p.y += -0.4 + Math.sin(t * 12e6) * 0.5;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.005, p.y * 0.8 * 0.005, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    let flatV = [];
    for (let j = 0; j < metaV[0].length; j += 3) {
        for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
    }
    vertices = flatV;
    // Create an empty buffer object to store the vertex buffer
    // var vertex_buffer = gl.createBuffer();
    //Bind appropriate array buffer to it
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Pass the vertex data to the buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // Unbind the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    /*======== Associating shaders to buffer objects ========*/
    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Get the attribute location
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
    gl.drawArrays(gl.POINTS, 0, num);
}


drawCount = 1;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.0000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 60000;
    function ro(a, l, x, y, h) {
        return {
            x: x + Math.cos(h + a) * l,
            y: y + Math.sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (10 - t) * 1000000;
    let rayInc = Math.PI * 2 / amountRays;
    let numV = 0;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        let jj = j - sj;
        metaV[indMetaV] = [];
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 2.9 * Math.tan(i * jj * 0.0125 * 0.25) * 0.5 + p.x * 1e-2;
            let l = 0.5 + Math.tan(i * jj * 0.0125 * 0.25) * 1.5 + p.x * 1e-2;
            p = ro(a, l, p.x * 0.991, p.y * 0.991, p.h * map(i, 7, num / amountRays, 0, 1));
            // p.x += Math.cos(t * 12e6) * 0.5;
            // p.y += -0.4 + Math.sin(t * 12e6) * 1.5;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.005, p.y * 0.8 * 0.005, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    let flatV = [];
    for (let j = 0; j < metaV[0].length; j += 3) {
        for (let i = 0; i < metaV.length; i++) {
            metaV[i][j] += Math.cos(i + t * 2e7) * i * 5e-3 + 0.1;
            metaV[i][j + 1] += Math.sin(i + t * 2e7) * i * 5e-3 - 0.2;
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
    }
    vertices = flatV;
    // Create an empty buffer object to store the vertex buffer
    // var vertex_buffer = gl.createBuffer();
    //Bind appropriate array buffer to it
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Pass the vertex data to the buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // Unbind the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    /*======== Associating shaders to buffer objects ========*/
    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Get the attribute location
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
    gl.drawArrays(gl.POINTS, 0, num);
}