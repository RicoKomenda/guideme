As an initial step for getting the database ready,
please install a DB gui like dbeaver to add privileges to the user 'guideme'.

To do so, create an root connection to the database (username: root, password: admin) and execute following statement:

GRANT ALL PRIVILEGES ON _._ TO 'guideme'@'%';

This will add all privileges for the database itself to the user 'guideme'
