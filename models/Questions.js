import mongoose from 'mongoose'

const QuestionSchema = mongoose.Schema({
    questionTitle : {type : String , require : "Question must have a title."},
    questionBody : {type : String , require : "Question must have a title."},
    questionTags : {type : [String ], require : "Question must have a title."},
    noOfAnswers : {type : Number,default: 0},
    upVote : {type : [String],default: []},
    downVote : {type : [String],default:[]},
    userPosted : {type : String,require:"Question must have an author"},
    userId : {type : String},
    AskedOn: {type : Date, default:Date.now},
    answer: [{
        answerBody : String,
        userAnswered : String,
        userId: String,
        answeredOn : {type : Date, default: Date.now}
    }]
})

export default mongoose.model("Question",QuestionSchema)