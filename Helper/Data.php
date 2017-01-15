<?php

namespace Dmatthew\AjaxCompare\Helper;

class Data extends \Magento\Catalog\Helper\Product\Compare
{
    /**
     * @var \Magento\Framework\Json\EncoderInterface
     */
    protected $_jsonEncoder;

    /**
     * @param \Magento\Framework\App\Helper\Context $context
     * @param \Magento\Store\Model\StoreManagerInterface $storeManager
     * @param \Magento\Catalog\Model\ResourceModel\Product\Compare\Item\CollectionFactory $itemCollectionFactory
     * @param \Magento\Catalog\Model\Product\Visibility $catalogProductVisibility
     * @param \Magento\Customer\Model\Visitor $customerVisitor
     * @param \Magento\Customer\Model\Session $customerSession
     * @param \Magento\Catalog\Model\Session $catalogSession
     * @param \Magento\Framework\Data\Form\FormKey $formKey
     * @param \Magento\Wishlist\Helper\Data $wishlistHelper
     * @param \Magento\Framework\Data\Helper\PostHelper $postHelper
     * @param \Magento\Framework\Json\EncoderInterface $jsonEncoder
     * @SuppressWarnings(PHPMD.ExcessiveParameterList)
     */
    public function __construct(
        \Magento\Framework\App\Helper\Context $context,
        \Magento\Store\Model\StoreManagerInterface $storeManager,
        \Magento\Catalog\Model\ResourceModel\Product\Compare\Item\CollectionFactory $itemCollectionFactory,
        \Magento\Catalog\Model\Product\Visibility $catalogProductVisibility,
        \Magento\Customer\Model\Visitor $customerVisitor,
        \Magento\Customer\Model\Session $customerSession,
        \Magento\Catalog\Model\Session $catalogSession,
        \Magento\Framework\Data\Form\FormKey $formKey,
        \Magento\Wishlist\Helper\Data $wishlistHelper,
        \Magento\Framework\Data\Helper\PostHelper $postHelper,
        \Magento\Framework\Json\EncoderInterface $jsonEncoder
    ) {
        $this->_jsonEncoder = $jsonEncoder;
        parent::__construct(
            $context,
            $storeManager,
            $itemCollectionFactory,
            $catalogProductVisibility,
            $customerVisitor,
            $customerSession,
            $catalogSession,
            $formKey,
            $wishlistHelper,
            $postHelper
        );
    }

    public function getCompareData(\Magento\Catalog\Api\Data\ProductInterface $product)
    {
        $config = [
            'id' => $product->getId(),
            'name' => $product->getName(),
            'product_url' => $product->getUrlModel()->getUrl($product),
            'removeUrl' => $this->getRemoveUrl()
        ];
        return $this->_jsonEncoder->encode($config);
    }
}