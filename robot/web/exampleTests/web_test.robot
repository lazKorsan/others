*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Robot Example Test
    Open Browser    https://example.com    chrome
    Title Should Be    Example Domain
    Close Browser
