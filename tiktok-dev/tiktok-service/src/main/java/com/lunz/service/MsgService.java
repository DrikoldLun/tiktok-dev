package com.lunz.service;

import com.lunz.mo.MessageMO;

import java.util.List;
import java.util.Map;

public interface MsgService {
    /**
     * 创建消息
     */
    public void createMsg(String fromUserId, String toUserId, Integer msgType, Map msgContent);

    public List<MessageMO> queryList(String toUserId, Integer page, Integer pageSize);
}
