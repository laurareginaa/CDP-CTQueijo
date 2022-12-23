//! Criação da classe de empregado:
class Employee {
    //* Método de construção da classe:
    constructor(id, name, email, password, role, image) {
        this.data = {
            id: id,
            name: name,
            email: email,
            password: password,
            role: role,
            image: image,
        };
    }

    //* Métodos Set:
    //? Método de definir o nome:
    set name(name) {
        this.data.name = name;
    }

    //? Método de definir o email:
    set email(email) {
        this.data.email = email;
    }

    //? Método de definir a senha:
    set password(password) {
        this.data.password = password;
    }

    //? Método de definir o cargo:
    set role(role) {
        this.data.role = role;
    }

    //? Método de definir a imagem:
    set image(image) {
        this.data.image = image;
    }

    //* Métodos Get:
    //? Método de receber o nome:
    get name() {
        return this.data.name;
    }

    //? Método de receber o email:
    get email() {
        return this.data.email;
    }

    //? Método de receber a senha:
    get password() {
        return this.data.password;
    }

    //? Método de receber o cargo:
    get role() {
        return this.data.role;
    }

    //? Método de definir a imagem:
    get image() {
        return this.data.image;
    }

    //* Método de receber os dados não vazios e diferentes de ID:
    partialData() {
        //? Remove os dados que estão vazios e o de ID:
        const newData = JSON.parse(JSON.stringify(this.data), (key, value) =>
            value === null || value === "" || key === "id" ? undefined : value
        );

        //? Retorna os dados:
        return newData;
    }
}

//! Exportação da classe:
export default Employee;
