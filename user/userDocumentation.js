module.exports = [
    {
        path: '/users', content: {
            "get":{
                "tags": [
                    "users"
                ],
                "description": "List all users.",
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "example": {
                                        "result": [
                                            {
                                                "id": "e9ec306a-4a01-4354-8124-b285f266c4ff",
                                                "name": "name",
                                                "email": "email",                            
                                                "createdAt": "2020-01-09T14:22:58.227Z",
                                                "updatedAt": "2020-01-09T14:22:58.227Z"
                                            }
                                        ],
                                        "messages": [
                                            "Success!"
                                        ]
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "post":{
                "tags": [
                    "users"
                ],
                "description": "Post a User.",
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "required": [
                                    "name",
                                    "email"
                                ],
                                "properties": {
                                    "name": {
                                        "type": "string",
                                        "example": "Alex Costa"
                                    },
                                    "email": {
                                        "type": "string",
                                        "example": "alex@mail.com"
                                    }
                                }
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "example": {
                                        "result": [
                                            {
                                                "id": "e9ec306a-4a01-4354-8124-b285f266c4ff",
                                                "name": "name",
                                                "email": "email",                            
                                                "createdAt": "2020-01-09T14:22:58.227Z",
                                                "updatedAt": "2020-01-09T14:22:58.227Z"
                                            }
                                        ],
                                        "messages": [
                                            "Success!"
                                        ]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        path: '/users/{id}', content: {
            "get":{
                "tags": [
                    "users"
                ],                
                "description": "Get a User.",
                "parameters": [
                    {
                        "in": "path",
                        "name": "id",
                        "schema": {
                            "type": "string",
                            "example": "e9ec306a-4a01-4354-8124-b285f266c4ff"
                        },
                        "required": true,
                        "description": "Id parametter to user."
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "example": {
                                        "result": [
                                            {
                                                "id": "e9ec306a-4a01-4354-8124-b285f266c4ff",
                                                "name": "name",
                                                "email": "email",                            
                                                "createdAt": "2020-01-09T14:22:58.227Z",
                                                "updatedAt": "2020-01-09T14:22:58.227Z"
                                            }
                                        ],
                                        "messages": [
                                            "User updated!"
                                        ]
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "User not found!",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "example": {
                                        "result": {},
                                        "messages": [
                                            "User not found!"
                                        ]
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "patch":{
                "tags": [
                    "users"
                ],                
                "description": "Path a User.",
                "parameters": [
                    {
                        "in": "path",
                        "name": "id",
                        "schema": {
                            "type": "string",
                            "example": "e9ec306a-4a01-4354-8124-b285f266c4ff"
                        },
                        "required": true,
                        "description": "Id parametter to user."
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "example": {
                                        "result": [
                                            {
                                                "id": "e9ec306a-4a01-4354-8124-b285f266c4ff",
                                                "name": "name",
                                                "email": "email",                            
                                                "createdAt": "2020-01-09T14:22:58.227Z",
                                                "updatedAt": "2020-01-09T14:22:58.227Z"
                                            }
                                        ],
                                        "messages": [
                                            "User updated!"
                                        ]
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "User not found!",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "example": {
                                        "result": {},
                                        "messages": [
                                            "User not found!"
                                        ]
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "delete":{
                "tags": [
                    "users"
                ],
                "description": "Delete a User.",
                "parameters": [
                    {
                        "in": "path",
                        "name": "id",
                        "schema": {
                            "type": "string",
                            "example": "e9ec306a-4a01-4354-8124-b285f266c4ff"
                        },
                        "required": true,
                        "description": "Id parametter to user."
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "example": {
                                        "result": [
                                            {
                                                "isFulfilled": "false",
                                                "isRejected": "false"
                                            }
                                        ],
                                        "messages": [
                                            "User deleted!"
                                        ]
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "User not found!",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "example": {
                                        "result": {},
                                        "messages": [
                                            "User not found!"
                                        ]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
];