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
                crossOrigin="anonymous">

              </script>
              <script src="../app.js"></script>
             <link rel="stylesheet" href="../main.css" type="text/css"/>
            </head>
            <body>
              <header>
                <h1 className="title">{this.props.title}</h1>
                <nav>
                  <ul className="flex-container">
                    <li className="flex-item"><a href="/appointments">Home</a></li>
                    <li className="flex-item"><a href="/appointments/new">Book Appointment</a></li>
                    <li className="flex-item"><a href="/appointments/edit">Reschedule Appointment</a></li>
                    <li className="flex-item"><a href="/">Cancel Appointment</a></li>
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



