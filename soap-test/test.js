var http = require('http');
var soap = require('soap');
var helloService = {
	Hello_Service: {
		Hello_Port: {
			sayHello: function(args) {
				console.log(args);
				return {
					greeting: "hello,"+args.name
				};
			}
		}
	}
}
var xml = require('fs').readFileSync('HelloService.wsdl', 'utf8'),
			server = http.createServer(function(request,response) {
				console.log("fuck");
				response.end("404: Not Found: "+request.url)
			});
server.listen(8000);
soap.listen(server, '/wsdl', helloService, xml);