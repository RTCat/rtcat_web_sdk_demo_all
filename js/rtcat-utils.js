'use strict';

function getSession() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            'url':token_url,
            'method':'POST',
            'headers':{
                'X-RTCAT-APIKEY':apikey,
                'X-RTCAT-SECRET':secret
            },
            'data':{
                'session_id':p2p_session,
                'type':'pub'
            }
        }).done(function (msg) {
            var token = msg.uuid;
            RTCat.setRelay(true,true);
            RTCat.createSession(token).then(function (session) {
                resolve(session);
            }).catch(function (e) {
                console.log(e);
            });
        }).error(function (error) {
            reject(error);
        })
    });
}

function playStream(stream,id) {
    var divId = 'video-'+id;
    var div = document.createElement('div');
    div.setAttribute('id',divId);
    document.querySelector('body').appendChild(div);
    stream.play(divId);
}