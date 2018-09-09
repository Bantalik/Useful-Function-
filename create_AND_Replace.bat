@echo off
title Create head and replace charakter

@echo.
@echo                               ******************************************************
@echo                                Vitejte v programu Create head and replace charakter.
@echo                               ******************************************************
@echo.
@echo                        Program slouzi k vytvoreni hlavicky a vymenu znaku (,;) za (. )
@echo                        Pracovni slozka se zadava ve formatu napr: D:\TEST_BAT_FILE
@echo                        Adresa souboru se zadava ve formatu napr: D:\TEST_BAT_FILE\pokus.csv 
@echo                        Nazev vysledneho souboru libovolny nazev bez mezer napr: Vysledek
@echo.
@echo.
SET /p workFOLDER=Zadej pracovni slozku:
SET newFILE1=%workFOLDER%\NEW_TEST_FILE.txt
SET newFILE2=%workFOLDER%\NEW_TEST_FI.txt

SET /p fileDIR=Zadej adresu souboru:
SET /p outputFielName=Nazev vysledneho souboru:
SET newFILE3=%workFOLDER%\%outputFielName%.csv

fsutil file createnew NEW_TEST_FILE.txt 
@echo ncols 640 >> %newFILE1% 
@echo nrows 512 >> %newFILE1%
@echo xllcorner  0 >> %newFILE1%
@echo yllcorner  0 >> %newFILE1%
@echo cellsize 1 >> %newFILE1%
@echo nodata_value -9999 >> %newFILE1%
TYPE %fileDIR% >> %newFILE1%
type %newFILE1% | powershell -Command "$input | ForEach-Object { $_ -replace \",\", \".\" }" > %newFILE2%
type %newFILE2% | powershell -Command "$input | ForEach-Object { $_ -replace \";\", \" \" }" > %newFILE3%
del %newFILE1%
del %newFILE2%

pause
