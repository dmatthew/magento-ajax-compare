<?php

namespace Dmatthew\AjaxCompare\Block\Product\ProductList\Item\AddTo;


class Compare extends \Magento\Catalog\Block\Product\ProductList\Item\Block
{
    /**
     * @param \Dmatthew\AjaxCompare\Block\Context $context
     * @param array $data
     */
    public function __construct(\Dmatthew\AjaxCompare\Block\Context $context, array $data = [])
    {
        parent::__construct($context, $data);
    }

    /**
     * @return \Dmatthew\AjaxCompare\Helper\Data
     */
    public function getCompareHelper()
    {
        return $this->_compareProduct;
    }

    public function isChecked()
    {
        return rand(0,1)
            ? true
            : false;
    }
}
