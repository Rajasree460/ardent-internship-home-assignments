import React, { useState } from "react";
import { ChakraProvider } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

const formatAdhaar = (value) => {
    const digits = value.replace(/\D/g, '');
    return digits.replace(/(\d{4})(?=\d)/g, '$1 ');
};

const Form = () => {
    const [input, setInput] = useState('');
    const [mobile, setMobile] = useState('');
    const [image, setImage] = useState('');
    const [imageError, setImageError] = useState('');
    const [adhar, setAdhare] = useState('');
    const [fileInputKey, setFileInputKey] = useState(Date.now()); // Unique key for the file input
    const [imagePreview, setImagePreview] = useState(''); // State for image preview
    const [touched, setTouched] = useState({
        input: false,
        mobile: false,
        adhar: false,
        image: false
    });

    const handleInputChange = (e) => setInput(e.target.value);

    const handleMobile = (e) => setMobile(e.target.value);

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 150 * 1024) {
                setImageError('Please upload an image with size 150 KB or less.');
                setImage('');
                setImagePreview('');
            } else if (file.type === 'image/png') {
                setImage(file.name);
                setImageError('');
                setImagePreview(URL.createObjectURL(file)); // Create an object URL for image preview
            } else {
                setImageError('Please upload a .png file');
                setImage('');
                setImagePreview('');
            }
        } else {
            setImageError('Field is required');
            setImage('');
            setImagePreview('');
        }
    };

    const handleAdhar = (e) => {
        const formattedAdhaar = formatAdhaar(e.target.value);
        setAdhare(formattedAdhaar);
    };

    const handleReset = () => {
        setInput('');
        setMobile('');
        setImage('');
        setImageError('');
        setAdhare('');
        setImagePreview('');
        setFileInputKey(Date.now()); // Update key to reset file input
        setTouched({
            input: false,
            mobile: false,
            adhar: false,
            image: false
        });
    };

    const handleBlur = (field) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
    };

    const isError = touched.input && input === '';
    const isErrorMobile = touched.mobile && mobile === '';
    const isErrorAdhar = touched.adhar && adhar === '';
    const isErrorImage = touched.image && !!imageError;

    const disableCopyPaste = (e) => {
        e.preventDefault();
    };

    return (
        <ChakraProvider>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3"></div>
                    <div className="col-12 col-md-6">
                        <div className="form pl-3 pr-3">
                            <h6 className="pt-3">Student Registration Form</h6>
                            <hr />
                            <form>
                                <FormControl isInvalid={isError}>
                                    <FormLabel fontSize={'14px'}>
                                        Name <sup style={{ color: 'red' }}>*</sup>
                                    </FormLabel>
                                    <Input
                                        type='text'
                                        name="name"
                                        placeholder="Enter Your Name"
                                        value={input}
                                        onChange={handleInputChange}
                                        onBlur={() => handleBlur('input')}
                                        onCopy={disableCopyPaste}
                                        onPaste={disableCopyPaste}
                                    />
                                    {!isError ? (
                                        <FormHelperText></FormHelperText>
                                    ) : (
                                        <FormErrorMessage ml={1}>Field is required.</FormErrorMessage>
                                    )}
                                </FormControl>

                                <FormControl isInvalid={isErrorMobile}>
                                    <FormLabel fontSize={'14px'} mt={4}>
                                        Mobile Number <sup style={{ color: 'red' }}>*</sup>
                                    </FormLabel>
                                    <Input
                                        type='number'
                                        name="mobile"
                                        placeholder="Enter Your Mobile No."
                                        value={mobile}
                                        onChange={handleMobile}
                                        onBlur={() => handleBlur('mobile')}
                                        onCopy={disableCopyPaste}
                                        onPaste={disableCopyPaste}
                                    />
                                    {!isErrorMobile ? (
                                        <FormHelperText></FormHelperText>
                                    ) : (
                                        <FormErrorMessage ml={1}>Field is required.</FormErrorMessage>
                                    )}
                                </FormControl>

                                <FormControl isInvalid={isErrorAdhar}>
                                    <FormLabel fontSize={'14px'} mt={4}>
                                        Adhaar Number <sup style={{ color: 'red' }}>*</sup>
                                    </FormLabel>
                                    <Input
                                        type='text'
                                        name="adhar"
                                        placeholder="Enter Your Aadhar No."
                                        value={adhar}
                                        onChange={handleAdhar}
                                        onBlur={() => handleBlur('adhar')}
                                        onCopy={disableCopyPaste}
                                        onPaste={disableCopyPaste}
                                    />
                                    {!isErrorAdhar ? (
                                        <FormHelperText></FormHelperText>
                                    ) : (
                                        <FormErrorMessage ml={1}>Field is required.</FormErrorMessage>
                                    )}
                                </FormControl>

                                <FormControl isInvalid={isErrorImage}>
                                    <FormLabel fontSize={'14px'} mt={4}>
                                        Image <sup style={{ color: 'red' }}>*</sup>
                                    </FormLabel>
                                    <Input
                                        type='file'
                                        name="image"
                                        accept=".png"
                                        placeholder="Upload your image"
                                        pt={1}
                                        key={fileInputKey}
                                        onChange={handleImage}
                                        onBlur={() => handleBlur('image')}
                                    />
                                    <div className="d-flex align-items-center mt-2">
                                        {imagePreview && (
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                style={{ width: 'auto', height: '50px', marginRight: '10px' }}
                                            />
                                        )}
                                        {image ? (
                                            <FormHelperText pl={1}>
                                                <span style={{ color: 'green' }}>Uploaded: {image}</span>
                                            </FormHelperText>
                                        ) : isErrorImage ? (
                                            <FormErrorMessage ml={1}>{imageError}</FormErrorMessage>
                                        ) : null}
                                    </div>
                                </FormControl>

                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-block float-right">
                                            <Button
                                                colorScheme='red'
                                                mr={2} mt={4}
                                                style={{
                                                    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
                                                }}
                                                onClick={handleReset}
                                            >
                                                Reset
                                            </Button>
                                            <Button
                                                colorScheme='blue'
                                                mt={4}
                                                style={{
                                                    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
                                                }}
                                            >
                                                Submit
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </ChakraProvider>
    );
};

export default Form;
