<?php

namespace Dmatthew\AjaxCompare\Controller\Product\Compare;

use \Magento\Framework\Controller\Result\JsonFactory;

class AjaxAdd extends \Magento\Framework\App\Action\Action
{
    /**
     * @var JsonFactory
     */
    protected $resultJsonFactory;

    public function __construct(
        \Magento\Framework\App\Action\Context $context,
        JsonFactory $resultJsonFactory
    ) {
        $this->resultJsonFactory = $resultJsonFactory;
        parent::__construct($context);
    }

    public function execute()
    {
        $resultJson = $this->resultJsonFactory->create();

        $result = [];

        return $resultJson->setData($result);
    }
}