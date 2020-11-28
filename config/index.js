const config = {
    dev:{
        db:'tonobil',
        server:{
            port: process.env.PORT || 3000,
        },
        mongo:{
            host: process.env.HOST || 'localhost',
            port: process.env.PORT || 27017
        }
    },
    test:{
        db:'tonobil',
        server:{
            port: process.env.PORT || 3000,
        },
        mongo:{
            host: process.env.HOST || 'localhost',
            port: process.env.PORT || 27017
        }
    },
    prod:{
        db:'tonobil',
        server:{
            port: process.env.PORT || 3000,
        },
        mongo:{
            host: process.env.HOST || 'localhost',
            port: process.env.PORT || 27017
        }
    }
}

module.exports = () => {
    if (process.env.NODE_ENV === 'production') {
      return config.prod;
    }
    if (process.env.NODE_ENV === 'test') {
      return config.test;
    }
    return config.dev;
  };
  