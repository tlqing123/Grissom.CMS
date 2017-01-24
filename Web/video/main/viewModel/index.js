﻿
var viewModel = function (data) {
    com.viewModel.search.apply(this, arguments);
}

var __pageSetting = {
    modalWidth: 650,
    modalHeight: 500,
    title: '视频'
};
(function () {
    com.ajax({
        type: "GET",
        url: "/video/main/gridConfig",
        success: function (data) {
            viewModel.call(window, data);
            window.init();
            ko.bindingViewModel();
        }
    })
})();
