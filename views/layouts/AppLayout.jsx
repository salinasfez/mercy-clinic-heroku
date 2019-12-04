const React = require('react');


class AppLayout extends React.Component {
    render () {
        return(
            <html>
            <head>
              <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width" />
              <title>{this.props.title}</title>
              <script
                  src="https://code.jquery.com/jquery-3.4.1.min.js"
                  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
                  crossOrigin="anonymous"></script>
             <link rel="stylesheet" type="text/css" href="/bootstrap.min.css"></link>
             <link rel="stylesheet" type="text/css" href="/main.css"></link>
             <script src="/app.js"></script>
            </head>
            <body>
              <header>
                <h1 className="title jumbotron display-3">{this.props.title}</h1>
                <nav className="navbar navbar-expand-lg navbar-light bg-light flex-container">
                  <ul className="flex-container">
                    <li className="flex-item"><a className="navbar-brand flex-item" href="/appointments">Home</a></li>
                    <li className="flex-item"><a className="navbar-brand flex-item" href="/appointments/new">Book Appointment</a></li>
                  </ul>
                </nav>
              </header>
              <main>
                {this.props.children}
              </main>
            </body>
          </html>

        )
    }
}


module.exports = AppLayout;



