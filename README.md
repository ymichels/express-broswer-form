# Intro

This package is ment to generate and expose a form on express.



# Usage


    var app = express();


prepareAppForForms(app);// adds dependensies to the app
app.use('/form', generateFormRouter(
    [
        {
            description: "enter the full name",
            fieldName: "fullName",
            fieldType: "string",
            isRequired: true
        },
        {
            description: "enter the dirth date",
            fieldName: "birthday",
            fieldType: "date",
            isRequired: true
        },
        {
            description: "enter the email",
            fieldName: "email",
            fieldType: "string",
            isRequired: false
        }
    ], '/form', (body: any) => body));

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

# Installation

<i>npm install hebrew-english</i><br/>