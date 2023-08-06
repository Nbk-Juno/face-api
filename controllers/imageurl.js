const handleApiCall = (req, res) => {
    const imageUrl = req.body.input;

    const PAT = '57856f6490364c158f52d81ab2b9a4ca';
    const USER_ID = 'nbk-juno';
    const APP_ID = 'face-recog';

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": imageUrl
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    fetch("https://api.clarifai.com/v2/models/face-detection/outputs", requestOptions)
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
        .catch(err => res.status(400).json('unable to work with API'))
}

module.exports = {
    handleApiCall
}
