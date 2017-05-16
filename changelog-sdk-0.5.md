V0.5

1. 删除 ``Stream``和 ``Session`` 的直接构造方式，必须使用 ``RTCat.createStream`` 和 ``RTCat.createSession`` 创建对象
2. 修改 ``Stream`` 的构造方法中的 ``type`` 参数类型，修改为枚举类型 ``RTCat.STREAM_TYPE``
3. ``Receiver`` 增加方法 ``response`` 需要在 ``Session`` 监听到 ``Receiver``事件后，使用该方法，确认回应请求，与另一端的 ``Sender`` 进行连接。

    ```js
    session.on('remote', function (receiver) {
        receiver.response();
    });
    ```

4. ``Receiver`` 增加方法 ``responseFile`` ,需要在 ``Receiver`` 监听到 ``receive_file `` 事件后，使用该方法，确认接受文件。

    ```js
    receiver.on('receive_file',function (fileName) {
        receiver.responseFile();
    });

    receiver.on('file',function(file){
        file.save();
    });
    ```

5. ``AbstractStream`` 修改 ``enableVideo``、 ``enableAudio``、 ``disableVideo`` 、``disableAudio`` ,现方法可以通过参数对选择该流的本地或所有接受方的音视频播放进行控制。
    ```js
    let options = {others:true,self:false}; //只禁用所有发给接收方的视频，保留本地视频
    localstream.disableVideo(options);
    ```
6. ``AbstractStream`` 删除 ``toggleAudio`` 、``toggleVideo`` 方法。
7. ``Sender`` 和 ``Receiver`` 增加方法: ``enableVideo``、 ``enableAudio``、 ``disableVideo`` 、``disableAudio`` 。用于对不同的通道中的流的音视频播放进行单独控制。