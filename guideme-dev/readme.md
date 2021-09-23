As an initial step for getting the database ready,
please install a DB gui like dbeaver to add privileges to the user 'guideme'.

To do so, create an root connection to the database (username: root, password: admin) and execute following statement:

```
GRANT ALL PRIVILEGES ON *.* TO 'guideme'@'%';
```

This will add all privileges for the database itself to the user 'guideme'

---

After running keycloak, visit localhost:8080 to access the administration panel of keycloak. Login using the credentials "admin" with the password "Pa55w0rd".

Add a new realm and import the keycloak-export file from keycloak-settings folder.
