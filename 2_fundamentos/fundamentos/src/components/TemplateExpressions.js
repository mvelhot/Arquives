const TemplateExpressions = () =>{

    const name = "Mark";
    const data = {
        age: 31,
        job: "Programmrr",


    };

    return (
        <div>
                <h1>Olá {name}</h1>
                <p>Atua como: {data.job}</p>

        </div>
    );
};

export default TemplateExpressions