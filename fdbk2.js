drawCount = 1;
fullArr = [];
nextArr = [];
for (let i = 0 ; i < 30000; i++) {
    fullArr.push({x: cos(i) * i, y: sin(i) * i});
    nextArr.push({x: 0, y: 0});
}
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.00000005 + 0;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 30000;
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
    let ink = 0;
    for (let j = sj; j < (Math.PI * 2 + sj) - rayInc; j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        let jj = j - sj;
        metaV[indMetaV] = [];
        for (let i = 0; i < (num / amountRays); i += 1) {
//             let a = 0;
//             let l = 1;
//             p = ro(a, l, p.x * 1, p.y * 1, p.h);
//             p.x += xOffset * 0.95;
//             p.y += yOffset * 0.95;
//             let ppx = cos(t * 2e6) * 50;
//             let ppy = sin(t * 2e6) * 50;
//             p.x = ppx * 1;
//             p.y = ppy * 1;
            let x = fullArr[ink].x;
            let y = fullArr[ink].y;
            p.x = tan(x * 2.05) * 0.49;
            p.y = tan(y * 2.05) * 0.49;
            nextArr[ink] = {x: p.x, y: p.y};
            ink++;
            var sc = 0.01 * (1 / cos(t * 4e5));
            sc = 15.5 * 0.75;
            metaV[indMetaV].push(p.y * 0.35 * 1.5 * sc, p.x * 0.8 * sc, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    for (let i = 0; i < num; i++) {
        fullArr[i] = {x: nextArr[i].x, y: nextArr[i].y};
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
fullArr = [];
nextArr = [];
for (let i = 0 ; i < 30000; i++) {
    fullArr.push({x: cos(i) * i, y: sin(i) * i});
    nextArr.push({x: 0, y: 0});
}
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.00000005 + 0;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 30000;
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
    let ink = 0;
    for (let j = sj; j < (Math.PI * 2 + sj) - rayInc; j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        let jj = j - sj;
        metaV[indMetaV] = [];
        for (let i = 0; i < (num / amountRays); i += 1) {
//             let a = 0;
//             let l = 1;
//             p = ro(a, l, p.x * 1, p.y * 1, p.h);
//             p.x += xOffset * 0.95;
//             p.y += yOffset * 0.95;
//             let ppx = cos(t * 2e6) * 50;
//             let ppy = sin(t * 2e6) * 50;
//             p.x = ppx * 1;
//             p.y = ppy * 1;
            let x = fullArr[ink].x;
            let y = fullArr[ink].y;
            p.x = tan(x * 2.0 + sin(x * 0.05)) * 0.49;
            p.y = tan(y * 2.0 + sin(x * 0.05)) * 0.49;
            nextArr[ink] = {x: p.x, y: p.y};
            ink++;
            var sc = 0.01 * (1 / cos(t * 4e5));
            sc = 15.5 * 0.75;
            metaV[indMetaV].push(p.y * 0.35 * 1.5 * sc, p.x * 0.8 * sc, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    for (let i = 0; i < num; i++) {
        fullArr[i] = {x: nextArr[i].x, y: nextArr[i].y};
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
fullArr = [];
nextArr = [];
for (let i = 0 ; i < 30000; i++) {
    fullArr.push({x: cos(i) * i, y: sin(i) * i});
    nextArr.push({x: 0, y: 0});
}
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.00000005 + 0;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 30000;
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
    let ink = 0;
    for (let j = sj; j < (Math.PI * 2 + sj) - rayInc; j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        let jj = j - sj;
        metaV[indMetaV] = [];
        for (let i = 0; i < (num / amountRays); i += 1) {
//             let a = 0;
//             let l = 1;
//             p = ro(a, l, p.x * 1, p.y * 1, p.h);
//             p.x += xOffset * 0.95;
//             p.y += yOffset * 0.95;
//             let ppx = cos(t * 2e6) * 50;
//             let ppy = sin(t * 2e6) * 50;
//             p.x = ppx * 1;
//             p.y = ppy * 1;
            let x = fullArr[ink].x;
            let y = fullArr[ink].y;
//             p.x = sin(tan(i * 0.2 * t * 1e8 + x * 0.1) * t * 1e6) * i * 100;
//             p.y = sin(tan(i * 0.2 * t * 1e8 + x * 0.1) * t * 1e6) * i * 100;
            let l = map(i, 0, (num / amountRays), 0, 1);
            p.x = cos(i + x * 0.0001 + t * 1e8) * i + x * 0.9;
            p.y = sin(i + y * 0.0001 + t * 1e8) * i + y * 0.9;
            nextArr[ink] = {x: p.x, y: p.y};
            ink++;
            var sc = 0.01 * (1 / cos(t * 4e5));
            sc = 15.5 * 0.00025;
            metaV[indMetaV].push(p.y * 0.35 * 1.5 * sc, p.x * 0.8 * sc, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    for (let i = 0; i < num; i++) {
        fullArr[i] = {x: nextArr[i].x, y: nextArr[i].y};
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
fullArr = [];
nextArr = [];
for (let i = 0 ; i < 30000; i++) {
    fullArr.push({x: cos(i) * i, y: sin(i) * i});
    nextArr.push({x: 0, y: 0});
}
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.00000005 + 0;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 30000;
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
    let ink = 0;
    for (let j = sj; j < (Math.PI * 2 + sj) - rayInc; j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        let jj = j - sj;
        metaV[indMetaV] = [];
        for (let i = 0; i < (num / amountRays); i += 1) {
//             let a = 0;
//             let l = 1;
//             p = ro(a, l, p.x * 1, p.y * 1, p.h);
//             p.x += xOffset * 0.95;
//             p.y += yOffset * 0.95;
//             let ppx = cos(t * 2e6) * 50;
//             let ppy = sin(t * 2e6) * 50;
//             p.x = ppx * 1;
//             p.y = ppy * 1;
            let x = fullArr[ink].x;
            let y = fullArr[ink].y;
//             p.x = sin(tan(i * 0.2 * t * 1e8 + x * 0.1) * t * 1e6) * i * 100;
//             p.y = sin(tan(i * 0.2 * t * 1e8 + x * 0.1) * t * 1e6) * i * 100;
            let l = map(i, 0, (num / amountRays), 0, 1);
            p.x = cos(i + x * 0.0001) * i + x * 0.95;
            p.y = sin(i + y * 0.0001) * i + y * 0.95;
            nextArr[ink] = {x: p.x, y: p.y};
            ink++;
            var sc = 0.01 * (1 / cos(t * 4e5));
            sc = 15.5 * 0.000025;
            metaV[indMetaV].push(p.y * 0.35 * 1.5 * sc, p.x * 0.8 * sc, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    for (let i = 0; i < num; i++) {
        fullArr[i] = {x: nextArr[i].x, y: nextArr[i].y};
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
fullArr = [];
nextArr = [];
for (let i = 0 ; i < 30000; i++) {
    fullArr.push({x: cos(i) * i, y: sin(i) * i});
    nextArr.push({x: 0, y: 0});
}
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.00000005 + 0;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 30000;
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
    let ink = 0;
    for (let j = sj; j < (Math.PI * 2 + sj) - rayInc; j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        let jj = j - sj;
        metaV[indMetaV] = [];
        for (let i = 0; i < (num / amountRays); i += 1) {
//             let a = 0;
//             let l = 1;
//             p = ro(a, l, p.x * 1, p.y * 1, p.h);
//             p.x += xOffset * 0.95;
//             p.y += yOffset * 0.95;
//             let ppx = cos(t * 2e6) * 50;
//             let ppy = sin(t * 2e6) * 50;
//             p.x = ppx * 1;
//             p.y = ppy * 1;
            let x = fullArr[ink].x;
            let y = fullArr[ink].y;
//             p.x = sin(tan(i * 0.2 * t * 1e8 + x * 0.1) * t * 1e6) * i * 100;
//             p.y = sin(tan(i * 0.2 * t * 1e8 + x * 0.1) * t * 1e6) * i * 100;
            let l = map(i, 0, (num / amountRays), 0, 1);
            p.x = cos(i + x * 0.00001) * i + x * 0.95;
            p.y = sin(i + y * 0.00001) * i + y * 0.95;
            nextArr[ink] = {x: p.x, y: p.y};
            ink++;
            var sc = 0.01 * (1 / cos(t * 4e5));
            sc = 15.5 * 0.000025;
            metaV[indMetaV].push(p.y * 0.35 * 1.5 * sc, p.x * 0.8 * sc, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    for (let i = 0; i < num; i++) {
        fullArr[i] = {x: nextArr[i].x, y: nextArr[i].y};
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
fullArr = [];
nextArr = [];
for (let i = 0 ; i < 30000; i++) {
    fullArr.push({x: cos(i) * i, y: sin(i) * i});
    nextArr.push({x: 0, y: 0});
}
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.00000005 + 0;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 30000;
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
    let ink = 0;
    for (let j = sj; j < (Math.PI * 2 + sj) - rayInc; j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        let jj = j - sj;
        metaV[indMetaV] = [];
        for (let i = 0; i < (num / amountRays); i += 1) {
//             let a = 0;
//             let l = 1;
//             p = ro(a, l, p.x * 1, p.y * 1, p.h);
//             p.x += xOffset * 0.95;
//             p.y += yOffset * 0.95;
//             let ppx = cos(t * 2e6) * 50;
//             let ppy = sin(t * 2e6) * 50;
//             p.x = ppx * 1;
//             p.y = ppy * 1;
            let x = fullArr[ink].x;
            let y = fullArr[ink].y;
//             p.x = sin(tan(i * 0.2 * t * 1e8 + x * 0.1) * t * 1e6) * i * 100;
//             p.y = sin(tan(i * 0.2 * t * 1e8 + x * 0.1) * t * 1e6) * i * 100;
            let l = map(i, 0, (num / amountRays), 0, 1);
            p.x = cos(i) * i + x * 0.94;
            p.y = sin(i) * i + y * 0.94;
            nextArr[ink] = {x: p.x, y: p.y};
            ink++;
            var sc = 0.01 * (1 / cos(t * 4e5));
            sc = 15.5 * 0.000025;
            metaV[indMetaV].push(p.y * 0.35 * 1.5 * sc, p.x * 0.8 * sc, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    for (let i = 0; i < num; i++) {
        fullArr[i] = {x: nextArr[i].x, y: nextArr[i].y};
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
fullArr = [];
nextArr = [];
for (let i = 0 ; i < 30000; i++) {
    fullArr.push({x: cos(i) * i, y: sin(i) * i});
    nextArr.push({x: 0, y: 0});
}
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.00000005 + 0;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 30000;
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
    let ink = 0;
    for (let j = sj; j < (Math.PI * 2 + sj) - rayInc; j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        let jj = j - sj;
        metaV[indMetaV] = [];
        for (let i = 0; i < (num / amountRays); i += 1) {
//             let a = 0;
//             let l = 1;
//             p = ro(a, l, p.x * 1, p.y * 1, p.h);
//             p.x += xOffset * 0.95;
//             p.y += yOffset * 0.95;
//             let ppx = cos(t * 2e6) * 50;
//             let ppy = sin(t * 2e6) * 50;
//             p.x = ppx * 1;
//             p.y = ppy * 1;
            let x = fullArr[ink].x;
            let y = fullArr[ink].y;
//             p.x = sin(tan(i * 0.2 * t * 1e8 + x * 0.1) * t * 1e6) * i * 100;
//             p.y = sin(tan(i * 0.2 * t * 1e8 + x * 0.1) * t * 1e6) * i * 100;
            let l = map(i, 0, (num / amountRays), 0, 1);
            p.x = cos(i) * i + x * 0.94 + x * 0.05;
            p.y = sin(i) * i + y * 0.94 + y * 0.05;
            nextArr[ink] = {x: p.x, y: p.y};
            ink++;
            var sc = 0.01 * (1 / cos(t * 4e5));
            sc = 15.5 * 0.000025;
            metaV[indMetaV].push(p.y * 0.35 * 1.5 * sc, p.x * 0.8 * sc, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    for (let i = 0; i < num; i++) {
        fullArr[i] = {x: nextArr[i].x, y: nextArr[i].y};
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
fullArr = [];
nextArr = [];
for (let i = 0 ; i < 30000; i++) {
    fullArr.push({x: cos(i) * i, y: sin(i) * i});
    nextArr.push({x: 0, y: 0});
}
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.00000005 + 0;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 30000;
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
    let ink = 0;
    for (let j = sj; j < (Math.PI * 2 + sj) - rayInc; j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        let jj = j - sj;
        metaV[indMetaV] = [];
        for (let i = 0; i < (num / amountRays); i += 1) {
//             let a = 0;
//             let l = 1;
//             p = ro(a, l, p.x * 1, p.y * 1, p.h);
//             p.x += xOffset * 0.95;
//             p.y += yOffset * 0.95;
//             let ppx = cos(t * 2e6) * 50;
//             let ppy = sin(t * 2e6) * 50;
//             p.x = ppx * 1;
//             p.y = ppy * 1;
            let x = fullArr[ink].x;
            let y = fullArr[ink].y;
//             p.x = sin(tan(i * 0.2 * t * 1e8 + x * 0.1) * t * 1e6) * i * 100;
//             p.y = sin(tan(i * 0.2 * t * 1e8 + x * 0.1) * t * 1e6) * i * 100;
            let l = map(i, 0, (num / amountRays), 0, 1);
            p.x = cos(i) * i + x * 0.95 + x * 0.05;
            p.y = sin(i) * i + y * 0.95 + y * 0.05;
            nextArr[ink] = {x: p.x, y: p.y};
            ink++;
            var sc = 0.01 * (1 / cos(t * 4e5));
            sc = 15.5 * 0.000025;
            metaV[indMetaV].push(p.y * 0.35 * 1.5 * sc, p.x * 0.8 * sc, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    for (let i = 0; i < num; i++) {
        fullArr[i] = {x: nextArr[i].x, y: nextArr[i].y};
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