migrate((db) => {
  const snapshot = [
    {
      "id": "d1i2gpddomc11cc",
      "created": "2023-03-04 13:19:27.751Z",
      "updated": "2023-03-30 07:30:27.524Z",
      "name": "person",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "tjqxeulu",
          "name": "firstname",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "2hlpzzni",
          "name": "lastname",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_d1i2gpddomc11cc_created_idx` ON `person` (`created`)"
      ],
      "listRule": "",
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "requireEmail": true
      }
    },
    {
      "id": "t0dn87mn9ayg6zl",
      "created": "2023-03-04 13:24:20.099Z",
      "updated": "2023-03-30 07:30:27.525Z",
      "name": "classroom",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "f1vc8cdg",
          "name": "school",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "cxlonqk7",
          "name": "owner",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "d1i2gpddomc11cc",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "id"
            ]
          }
        },
        {
          "system": false,
          "id": "g7iexg2d",
          "name": "students",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "d1i2gpddomc11cc",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": null,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "jepenjfa",
          "name": "active",
          "type": "bool",
          "required": false,
          "unique": false,
          "options": {}
        }
      ],
      "indexes": [
        "CREATE INDEX `_t0dn87mn9ayg6zl_created_idx` ON `classroom` (`created`)"
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "586gqatrz3xpkr1",
      "created": "2023-03-04 13:27:44.466Z",
      "updated": "2023-03-30 07:30:27.525Z",
      "name": "group",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "hwd1zrfx",
          "name": "students",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "d1i2gpddomc11cc",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": null,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "ocivoeql",
          "name": "missions",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "6lz25cimhgljp1x",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": null,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "8bm71miv",
          "name": "clues",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "5k3orzralvhwyug",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "w9skfabl",
          "name": "date",
          "type": "date",
          "required": false,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        },
        {
          "system": false,
          "id": "sn29kirf",
          "name": "week",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "dtcwzespiyr5w2d",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_586gqatrz3xpkr1_created_idx` ON \"group\" (`created`)"
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "6lz25cimhgljp1x",
      "created": "2023-03-04 13:29:19.145Z",
      "updated": "2023-03-30 07:30:27.526Z",
      "name": "mission",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "lmtvzq0j",
          "name": "name",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "ibzldl0p",
          "name": "category",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "ndtj27jd16m7gaf",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_6lz25cimhgljp1x_created_idx` ON \"mission\" (`created`)"
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "ndtj27jd16m7gaf",
      "created": "2023-03-04 13:29:33.461Z",
      "updated": "2023-03-30 07:30:27.526Z",
      "name": "category",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "m49zplxk",
          "name": "name",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_ndtj27jd16m7gaf_created_idx` ON \"category\" (`created`)"
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "f3z8z5z6ntyncb5",
      "created": "2023-03-04 13:55:27.463Z",
      "updated": "2023-03-30 07:30:27.526Z",
      "name": "riddle",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "nzpudgix",
          "name": "statement",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_f3z8z5z6ntyncb5_created_idx` ON \"riddle\" (`created`)"
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "5k3orzralvhwyug",
      "created": "2023-03-04 13:56:38.274Z",
      "updated": "2023-03-30 07:30:27.526Z",
      "name": "clues",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "r3o6yexk",
          "name": "statement",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "qhyc84gy",
          "name": "riddle",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "f3z8z5z6ntyncb5",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_5k3orzralvhwyug_created_idx` ON `clues` (`created`)"
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "dtcwzespiyr5w2d",
      "created": "2023-03-04 14:05:12.241Z",
      "updated": "2023-03-30 07:30:27.526Z",
      "name": "week",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "vlf13yn2",
          "name": "riddle",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "f3z8z5z6ntyncb5",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_dtcwzespiyr5w2d_created_idx` ON `week` (`created`)"
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "544xdaeimweqo20",
      "created": "2023-03-04 14:24:04.288Z",
      "updated": "2023-03-30 07:30:27.527Z",
      "name": "page",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "by2eub4y",
          "name": "template",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null
          }
        },
        {
          "system": false,
          "id": "ejqegxqb",
          "name": "texts",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "raawqpfl",
          "name": "week",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "dtcwzespiyr5w2d",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "fd8xsvtc",
          "name": "stickers",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        }
      ],
      "indexes": [
        "CREATE INDEX `_544xdaeimweqo20_created_idx` ON `page` (`created`)"
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "madpzxfignxorhw",
      "created": "2023-03-04 14:24:56.662Z",
      "updated": "2023-03-30 07:30:27.527Z",
      "name": "photo",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "rennkgdk",
          "name": "week",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "dtcwzespiyr5w2d",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "gdrwwhrn",
          "name": "page",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "544xdaeimweqo20",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "5ghy3ktb",
          "name": "slot",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_madpzxfignxorhw_created_idx` ON `photo` (`created`)"
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
