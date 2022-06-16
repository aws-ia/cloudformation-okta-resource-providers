import {resource} from "./handlers";
import {ResourceModel} from "./models";

var createdModel: ResourceModel;

describe("ApplicationHandler tests", () => {
    it("should create app", () => {
            createdModel = new ResourceModel(<ResourceModel>{
                oktaAccess: {
                    apiKey: "<OKTA_API_KEY>",
                    url: "<OKTA_API_KEY>"
                },
                settings: <unknown>{
                    app: {
                        url: "http://localhost:8081",
                        authUrl: "http://localhost:8081"
                    }
                },
                visibility: {
                    hide: {
                        ios: true,
                        web: true
                    }
                },
                name: "template_basic_auth",
                label: "My Label",
                "signOnMode": "BASIC_AUTH"
            });


            // var model = Object.assign(new ResourceModel(), {
            //    okta
            // });
            // var model:ResourceModel = {
            //     oktaAccess: new OktaAccess()
            // }

            resource.create(createdModel).then(rm => {
                console.log("Hello, World. " + rm);
            }).catch(e => {
                console.log("error: " + e);
            });
        }
    )
    it("should return newly created app app", () => {
        var idOnlyModel = Object.assign(new ResourceModel(), <ResourceModel>{
            oktaAccess: {
                apiKey: "<OKTA_API_KEY>",
                url: "<OKTA_API_KEY>"
            },
            id: createdModel.id
        });
        resource.get(createdModel).then(rm => {

        }).catch(e => {

        });
    })
})

