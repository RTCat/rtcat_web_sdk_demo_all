// 实时猫开发者身份证明
// 每当开发者创建一个项目(Project)，实时猫会为项目生成一个唯一的APIkey和对应的Secret，以供开发者标识和管理这个项目。
// APIKey相当于项目的识别号，客户端和服务器端都通过这个Key来使用实时猫服务。
// 每个项目的APIKey都有对应的一个Secret，相当于项目的密码，调用服务器端API时，需要提供该Secret。
var apikey = "91af9be9-7bac-40df-962d-f141eebe9d43";
var secret="ce8df259-1f7a-4aa4-9e4e-862af9f6c24d";

//开发者既可以选择手动从 `实时猫控制台生成` Session ，也可以通过调用 `服务器RESTful API` 生成。
var p2p_session="073df4a9-e9ef-4f45-a2b0-e14c778bcd86";

//实时猫后台 `Restful API` 获取token。
var token_url = "https://api.realtimecat.com/v0.3/sessions/"+p2p_session+'/tokens';