var express = require('express');
var router = express.Router();

/* GET product01 page*/
router.get('/product01', function(req, res, next) {
    res.render('pages/single-product', {
        breadcrumbValue: "Trang chủ / Cửa hàng / product01",
        imgSource: "img/category/category_1.png",
        productName: "Sản phẩm 1",
        price: "123$",
        shortDescribe: "Mô tả ngắn sản phẩm 01",
        stt: "Còn hàng",
        type: "Loại mặt hàng"
    });
  });

/* GET product02 page*/
router.get('/product02', function(req, res, next) {
    res.render('pages/single-product', {
        breadcrumbValue: "Trang chủ / Cửa hàng / product02",
        imgSource: "img/category/category_2.png",
        productName: "Sản phẩm 2",
        price: "123$",
        shortDescribe: "Mô tả ngắn sản phẩm 02",
        stt: "Hết hàng",
        type: "Loại mặt hàng"
    });
  });

  /* GET product03 page*/
router.get('/product03', function(req, res, next) {
    res.render('pages/single-product', {
        breadcrumbValue: "Trang chủ / Cửa hàng / product03",
        imgSource: "img/category/category_3.png",
        productName: "Sản phẩm 3",
        price: "123$",
        shortDescribe: "Mô tả ngắn sản phẩm 03",
        stt: "Hết hàng",
        type: "Loại mặt hàng"
    });
  }); 

/* GET product04 page*/
router.get('/product04', function(req, res, next) {
    res.render('pages/single-product', {
        breadcrumbValue: "Trang chủ / Cửa hàng / product04",
        imgSource: "img/category/category_4.png",
        productName: "Sản phẩm 4",
        price: "123$",
        shortDescribe: "Mô tả ngắn sản phẩm 04",
        stt: "Còn hàng",
        type: "Loại mặt hàng"
    });
  });

  /* GET product05 page*/
router.get('/product05', function(req, res, next) {
    res.render('pages/single-product', {
        breadcrumbValue: "Trang chủ / Cửa hàng / product05",
        imgSource: "img/category/category_5.png",
        productName: "Sản phẩm 5",
        price: "123$",
        shortDescribe: "Mô tả ngắn sản phẩm 05",
        stt: "Còn hàng",
        type: "Loại mặt hàng"
    });
  }); 

  /* GET product06 page*/
router.get('/product06', function(req, res, next) {
    res.render('pages/single-product', {
        breadcrumbValue: "Trang chủ / Cửa hàng / product06",
        imgSource: "img/category/category_6.png",
        productName: "Sản phẩm 6",
        price: "123$",
        shortDescribe: "Mô tả ngắn sản phẩm 06",
        stt: "Còn hàng",
        type: "Loại mặt hàng"
    });
  });    

  /* GET product07 page*/
router.get('/product07', function(req, res, next) {
    res.render('pages/single-product', {
        breadcrumbValue: "Trang chủ / Cửa hàng / product07",
        imgSource: "img/category/category_7.png",
        productName: "Sản phẩm 7",
        price: "123$",
        shortDescribe: "Mô tả ngắn sản phẩm 07",
        stt: "Còn hàng",
        type: "Loại mặt hàng"
    });
  });

  /* GET product08 page*/
router.get('/product08', function(req, res, next) {
    res.render('pages/single-product', {
        breadcrumbValue: "Trang chủ / Cửa hàng / product08",
        imgSource: "img/category/category_8.png",
        productName: "Sản phẩm 8",
        price: "123$",
        shortDescribe: "Mô tả ngắn sản phẩm 08",
        stt: "Còn hàng",
        type: "Loại mặt hàng"
    });
  });   

    /* GET product09 page*/
router.get('/product09', function(req, res, next) {
    res.render('pages/single-product', {
        breadcrumbValue: "Trang chủ / Cửa hàng / product09",
        imgSource: "img/category/category_9.png",
        productName: "Sản phẩm 9",
        price: "123$",
        shortDescribe: "Mô tả ngắn sản phẩm 09",
        stt: "Còn hàng",
        type: "Loại mặt hàng"
    });
  });
  
    /* GET product10 page*/
router.get('/product10', function(req, res, next) {
    res.render('pages/single-product', {
        breadcrumbValue: "Trang chủ / Cửa hàng / product10",
        imgSource: "img/category/category_10.png",
        productName: "Sản phẩm 10",
        price: "123$",
        shortDescribe: "Mô tả ngắn sản phẩm 10",
        stt: "Còn hàng",
        type: "Loại mặt hàng"
    });
  });   

    /* GET product11 page*/
router.get('/product11', function(req, res, next) {
    res.render('pages/single-product', {
        breadcrumbValue: "Trang chủ / Cửa hàng / product11",
        imgSource: "img/category/category_11.png",
        productName: "Sản phẩm 11",
        price: "123$",
        shortDescribe: "Mô tả ngắn sản phẩm 11",
        stt: "Hết hàng",
        type: "Loại mặt hàng"
    });
  });

    /* GET product12 page*/
router.get('/product12', function(req, res, next) {
    res.render('pages/single-product', {
        breadcrumbValue: "Trang chủ / Cửa hàng / product12",
        imgSource: "img/category/category_12.png",
        productName: "Sản phẩm 12",
        price: "123$",
        shortDescribe: "Mô tả ngắn sản phẩm 12",
        stt: "Hết hàng",
        type: "Loại mặt hàng"
    });
  });  
module.exports = router;