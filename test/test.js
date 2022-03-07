const _essensify_part = require('../extension/main.js')
const src = require('./src.json')


test("_essensify_part(): get essential part information", () => {
    const id = "gge1dc71d6334fc68d7"
    const part = src.schlib[id]
    const essentified_part = {
        "_id": id,
        "desc": "B4B-XH-A(LF)(SN)",
        "id": "CN-XH",
        "pins": {
            "1": {"name": "1", "x": 570, "y": -425},
            "2": {"name": "2", "x": 570, "y": -435},
            "3": {"name": "3", "x": 570, "y": -445},
            "4": {"name": "4", "x": 570, "y": -455}}
        }
    expect(_essensify_part(part)).toMatchObject(essentified_part)
});
