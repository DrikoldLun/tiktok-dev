package com.lunz.mapper;

import com.lunz.vo.CommentVO;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface CommentMapperCustom {
    public List<CommentVO> getCommentList(@Param("paramMap") Map<String,Object> map);
}