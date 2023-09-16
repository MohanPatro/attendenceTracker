const Sequelize=require('sequelize')

const sequelize=new Sequelize('student','root','AMma@143',{
    host:'localhost',
    dialect:'mysql'
});


const Student=sequelize.define('student',{
    roll:{
        type:Sequelize.INTEGER,
    },
    Date:{
        type:Sequelize.DATE
    },
    Time:{
        type:Sequelize.TIME
    },
    status:{
        type:Sequelize.STRING
    },
    reason:{
        type:Sequelize.STRING,
        defaultValue:"none"
    }

},{
    freezeTableName:true
})

// Student.sync({alter:true})

module.exports={sequelize,Sequelize,Student};