package com.lunz.mapper;

import com.lunz.vo.IndexVlogVO;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface VlogMapperCustom {
    public List<IndexVlogVO> getIndexVlogList(@Param("paramMap")Map<String,Object> map);
}