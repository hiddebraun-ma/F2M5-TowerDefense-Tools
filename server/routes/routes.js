const path = require('path')
const config = require('../package.json')

// Where to save our levels json
const dataPath = path.resolve('data', 'levels.json')

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.send(`Welkom op de Tower Defense server van ${config.author}`);
    });

    app.get('/levels', (req, res) => {

        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    })

    app.post('/levels', (req, res) => {

        const levelJSON = JSON.stringify(req.body, null, 2);

        fs.writeFile(dataPath, levelJSON, 'utf8', err => {

            if (err) {
                res.status(500).send(err);
                throw err;
            }

            res.status(200).send('Levels saved');
        })

    })
}

module.exports = appRouter;