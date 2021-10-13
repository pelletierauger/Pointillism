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
    let t = drawCount * 5e-5 + 10;
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