package com.pinyougou.sellergoods;

import com.pinyougou.pojo.TbBrand;

import java.util.List;

public interface BrandService {
    /**
     * 返回全部列表
     * @return
     */
    public List<TbBrand> findAll();
}
