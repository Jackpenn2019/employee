exports.employeeList = (req, res) => {
  //hardcoded list of employees
  const employees = [
    {
      name: 'Judy',
      age: 20,
      gender: 'Female',
    },
    {
      name: 'Chesire',
      age: 30,
      gender: 'Male',
    },
  ];

  const giddie = {
    name: 'Giddie',
    age: 30,
    gender: 'Male',
  };

  employees.push(giddie);

  //respond with the list
  res.status(200).json(employees);
};
