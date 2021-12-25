package com.lunz.controller;

import com.lunz.base.BaseInfoProperties;
import com.lunz.grace.result.GraceJSONResult;
import com.lunz.mo.MessageMO;
import com.lunz.service.MsgService;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@Api(tags = "MsgController 消息功能模块的接口")
@RequestMapping("msg")
public class MsgController extends BaseInfoProperties {

    @Autowired
    private MsgService msgService;

    @GetMapping("list")
    public GraceJSONResult list(@RequestParam String userId,
                                @RequestParam Integer page,
                                @RequestParam Integer pageSize) {
        // mongodb 从0分页，区别于数据库
        if (page == null) {
            page = COMMON_START_PAGE_ZERO;
        }
        if (pageSize == null) {
            pageSize = COMMON_PAGE_SIZE;
        }

        List<MessageMO> list = msgService.queryList(userId,page,pageSize);

        return GraceJSONResult.ok(list);
    }
}
