import React from 'react';
import { Button, Input, Text, ChakraProvider } from '@chakra-ui/react';

const Bill = () => {
    const [value, setValue] = React.useState('');
    const [quantity, setQuant] = React.useState('');
    const [rate, setRate] = React.useState('');

    const handleChange = (event) => setValue(event.target.value);
    const handleChangeQ = (event) => setQuant(event.target.value);
    const handleChangeR = (event) => setRate(event.target.value);

    const calculateTotal = () => {
        const qty = parseFloat(quantity) || 0;
        const rt = parseFloat(rate) || 0;
        return qty * rt;
    };

    const resetFields = () => {
        setValue('');
        setQuant('');
        setRate('');
    };

    return (
        <ChakraProvider>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='form'>
                            <h6 style={{ textAlign: 'left', fontWeight: 'bold' ,fontSize:'30px', marginTop:'10px'}}>Billing Software</h6>
                            <hr />
                            <div className='button-container'>
                                <Button
                                    colorScheme='red'
                                    ml={2} mt={4}
                                    style={{
                                        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                                        width: '160px',
                                        height: '40px',
                                        borderRadius: '5px',
                                        fontSize: '15px',
                                        fontWeight: 'bold'
                                    }}
                                    onClick={resetFields}
                                >
                                    Generate New Bill
                                </Button>
                                <div className='gst'>
                                    <h6>GST No:- 22AAAAA00000A125</h6>
                                </div>
                            </div>
                            <hr />
                            <div className='inputall'>
                                <div className='input-p'>
                                    <Text mb='8px'>Product Name</Text>
                                    <Input
                                        value={value}
                                        onChange={handleChange}
                                        placeholder='Enter product name'
                                        size='sm'
                                        width='160px'
                                        height='40px'
                                    />
                                </div>
                                <div className='input-q'>
                                    <Text mb='8px'>Quantity</Text>
                                    <Input
                                        value={quantity}
                                        onChange={handleChangeQ}
                                        placeholder='Enter Quantity'
                                        size='sm'
                                        width='160px'
                                        height='40px'
                                    />
                                </div>
                                <div className='input-r'>
                                    <Text mb='8px'>Rate</Text>
                                    <Input
                                        value={rate}
                                        onChange={handleChangeR}
                                        placeholder='Enter rate'
                                        size='sm'
                                        width='160px'
                                        height='40px'
                                    />
                                </div>
                                <div className='input-t'>
                                    <Text mb='8px'>Total</Text>
                                    <Input
                                        value={calculateTotal()}
                                        isReadOnly
                                        size='sm'
                                        width='160px'
                                        height='40px'
                                    />
                                </div>
                                <Button
                                    colorScheme='green'
                                    mr={4} mt={8}
                                    style={{
                                        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                                        width: '120px',
                                        height: '40px',
                                        borderRadius: '5px',
                                        fontSize: '15px',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Add Product
                                </Button>
                            </div>
                            <hr></hr>
                        </div>
                    </div>
                </div>
            </div>
        </ChakraProvider>
    );
}

export default Bill;
