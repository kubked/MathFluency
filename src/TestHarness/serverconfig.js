module.exports = {
    "port": 8000,
    "rootPath": "/",
    "outputPath": "/var/www/testharness/output",
    "longSessionLength": 7776000000, // 90 days when checking "remember me"
    "mysql": {
        "database": "TestHarness",
        "user": "TestHarness",
        "password": "TestHarness"
    }
};
