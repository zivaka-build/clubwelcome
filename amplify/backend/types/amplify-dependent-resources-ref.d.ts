export type AmplifyDependentResourcesAttributes = {
    "function": {
        "emailSenderFunction": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "emailSender": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}