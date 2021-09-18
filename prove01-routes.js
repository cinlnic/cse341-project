
const users = ['Rob', 'Ethan', 'Conner', 'Joshua'];

const requestHandler = (request, response) => {
    const url = request.url;
    const method = request.method;

    if (url === '/') {
        response.write('<html>');
        response.write('<body>');
        response.write('<h1>Welcome!</h1>');
        response.write('<p>Create a user name</p>')
        response.write('<form action="/create-user" method="POST"><input type="text" name="create-user"><button type="submit">Create</button></form>');
        response.write('</body>');
        response.write('</html>');
        return response.end();
    }

    if (url === '/users') {
        response.write('<html>');
        response.write('<body>');
        response.write('<h1>Users</h1>');
        response.write('<ul>');
        for (let user of users) {
            response.write(`<li>${user}</li>`);
        }
        response.write('</ul>');
        response.write('</body>');
        response.write('</html>');
        return response.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        request.on('data', (chunck) =>{
            body.push(chunck);
        });
        return request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const userName = parsedBody.split('=')[1];
            users.push(userName);
            console.log(userName);
            response.statusCode = 302;
            response.setHeader('Location', '/users');
            return response.end();
        });
    };
};

module.exports = requestHandler;