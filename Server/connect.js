const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ananyaks1905:wZKYwwl1s8aUz8k0@cluster0.2375ute.mongodb.net/Ayush?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) :
    console.log('Connected to Ayush database'));

const UserSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    abstract: {
        type: Buffer,
    },
    domain: {
        type: String,
    },
    desc: {
        type: String,
    },
    isApprove: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
    },
    isFunding: {
        type: Boolean,
    },
    comment: {
        type: String,
    },
    display: {
        type: Boolean,
        default: false
    }

});


const User = mongoose.model('Project', UserSchema);
User.createIndexes();


const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 2000");
app.use(express.json());
app.use(cors());


app.get('/api/items', async (req, res) => {
    try {
        const items = await User.find({isApprove:false});
        res.status(200).json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/invest/items', async (req, res) => {
    try {
        const items1 = await User.find({ isApprove: true, rating: { $gte: 7 } });
        const items2 = await User.find({ isApprove: true, rating: { $lt: 7 } });
        res.status(200).json({ items1, items2 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/cnfm/items', async (req, res) => {
    try {
      const condition1 = { display: true };
      const condition2 = { isFunding: true };
      const condition3 = { isFunding: false};

      const items1= await User.find({ $and: [condition1, condition2] });
      const items2= await User.find({ $and: [condition1, condition3] });
  
      res.status(200).json({items1, items2});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  


app.post("/register", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            resp.send(req.body);
            console.log(result);
        }

    } catch (e) {
        console.log(e)
        resp.send("Something Went Wrong");
    }
});

app.put("/update", async (req, resp) => {
    try {
        console.log(req.body)
        let result = await User.findOneAndUpdate({ title: req.body.title }, { $set: { title: req.body.title, isApprove: req.body.isApprove, rating: req.body.rating } }, { new: true })
        console.log(result)
        if (result) {
            resp.send(req.body);
            console.log(result);
        }

    } catch (e) {
        console.log(e)
        resp.send("Something Went Wrong");
    }
})
app.put("/update1", async (req, resp) => {
    try {
        console.log(req.body)
        let result = await User.findOneAndUpdate({ title: req.body.title }, { $set: { isFunding: req.body.isFunding, comment: req.body.comment, display: req.body.display } }, { new: true })
        console.log(result)
        if (result) {
            resp.send(req.body);
            console.log(result);
        }

    } catch (e) {
        console.log(e)
        resp.send("Something Went Wrong");
    }
})

app.listen(2000);