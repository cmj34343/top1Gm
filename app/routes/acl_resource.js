/**
 * Created by wuwy on 2016/2/17.
 */
var express = require('express');
var router = express.Router();
var async = require('async');
var resourceController = require('../controllers/acl_resource');
var util = require('../../config/public.js');

router.post('/addArray', function(req,res){
    try{
        var newList = JSON.parse(req.body.list);
        async.auto({
            getAll:function(cb){
                resourceController.getList({},function(err,data){
                    var resourceIdList = [];
                    if(data){
                        data.forEach(function(item){
                            resourceIdList.push(item.id);
                        });
                    }
                    cb(err,resourceIdList);
                });
            },
            operate:["getAll",function(data,cb){
                var resourceList = data.getAll;
                if(newList){
                    newList.forEach(function(item){
                        var index = resourceList.indexOf(item.id);
                        if(index>-1){ //update
                            resourceList.splice(index, 1);
                            resourceController.update(item,function(err,data){
                               console.log(">> update:",err);
                            });
                        }else{  //add
                            resourceController.save(item,function(err,data){
                                console.log(">> save:",err);
                            });
                        }

                    });
                }
                console.log("len2:",resourceList.length);
                if(resourceList.length>0){
                    resourceList.forEach(function(resourceId){  //delete
                        resourceController.delete({id:resourceId},function(err,data){
                            console.log(">> delete:",err);
                            global.acl.removeResource(resourceId,function(err){
                                console.log(">> delete2:",err,resourceId);
                            })  // delete acl
                        });

                    });
                }

                cb();
            }]
        },function(err,data){
            res.send({
                code:"200",
                msg:"???????????????"
            });
        });
    }catch(err){
        res.end(err.stack);
    }

});


//??????id????????????
router.post('/getList',function(req,res){
    var param = req.body;
    try{
        async.auto({
            list:function(cb){
                resourceController.getList(param,cb);
            },
            count:function(cb){
                resourceController.count(param,cb);
            },
        } ,function(err,data){
            res.send({
                code:"200",
                msg:"??????????????????",
                result: data.list,
                count:data.count
            });
        });
    }catch(err){
        res.end(err.stack);
    }
});


module.exports = router;


