+++
title = "Golang and 1.2 version performance improvement"
aliases=[
  "2013/12/03/golang-and-1-2-version-performance-improvement.html",
  "blog/development/golang-and-1-2-version-performance-improvement"
]
date = "2013-12-03"
tags = ["golang","english","tech"]
categories = "dev"
+++

I've started using Go last month and I really liked to work with the language.

The project I'm working on is dead simple and just retrieves metrics and save on
a redis server (the data will be analyzed by a different project that I'm
working on). So I have 15 goroutines retrieving data constantly and I'm using
just two native threads.

I did some CPU profiling on the code using my current machine for Golang 1.1.2
and 1.2 and the results can be seen below.

Golang 1.1.2:

        (pprof) top10
        Total: 188701 samples
        137454  72.8%   72.8%   137454  72.8% crypto/des.permuteBlock
        44032   23.3%   96.2%   169187  89.7% crypto/des.feistel
        3750    2.0%    98.2%   184544  97.8% crypto/des.cryptBlock
        823     0.4%    98.6%   185650  98.4% crypto/cipher.(*cbcDecrypter).CryptBlocks
        290     0.2%    98.8%      290   0.2% encoding/binary.bigEndian.PutUint64
        232     0.1%    98.9%      232   0.1% encoding/binary.bigEndian.Uint64
        227     0.1%    99.0%      227   0.1% crypto/sha1.block
        215     0.1%    99.1%      267   0.1% encoding/json.state1
        207     0.1%    99.2%      430   0.2% encoding/json.checkValid
        178     0.1%    99.3%      398   0.2% encoding/json.nextValue

        # top command result
        PID USER      PR  NI  VIRT    RES      SHR S  %CPU %MEM    TIME+  COMMAND
        18115 pothix    20   0  871800  67888   3932 S 188.8  1.7  12:40.08 crebain

        # A snapshot of the processors
        %Cpu0  :100.0 us,  0.0 sy,  0.0 ni,  0.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
        %Cpu1  : 95.0 us,  3.0 sy,  0.0 ni,  2.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st

Golang 1.2:

        (pprof) top10
        Total: 6894 samples
        1686    24.5%   24.5%   1686    24.5%   crypto/aes.decryptBlockGo
        1299    18.8%   43.3%   3093    44.9%   crypto/cipher.(*cbcDecrypter).CryptBlocks
        471     6.8%    50.1%   1062    15.4%   encoding/json.checkValid
        420     6.1%    56.2%   541     7.8%    encoding/json.state1
        359     5.2%    61.4%   359     5.2%    crypto/sha1.block
        305     4.4%    65.9%   838     12.2%   encoding/json.nextValue
        245     3.6%    69.4%   274     4.0%    syscall.Syscall
        230     3.3%    72.7%   230     3.3%    encoding/json.stateBeginValue
        186     2.7%    75.4%   225     3.3%    encoding/json.stateEndValue
        156     2.3%    77.7%   156     2.3%    runtime.memmove

        top command result
        PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
        20534 pothix    20   0  598428  51584   3532 S  12.9  1.3   0:03.76 crebain

        %Cpu0  : 12.1 us,  5.1 sy,  5.1 ni, 72.7 id,  5.1 wa,  0.0 hi,  0.0 si,  0.0 st
        %Cpu1  : 20.0 us,  4.0 sy,  0.0 ni, 75.0 id,  1.0 wa,  0.0 hi,  0.0 si,  0.0 st

What an improvement! :)

I know that this application may not be the best example to compare Go with a
different language because it depends of a third application (that is my
bottleneck BTW) and Ruby perform as good as the new version but I really liked
to give Go a try.

Go language has a lot of interesting ideas and it is growing fast.
Looks like it is a good idea of language for some of my projects, welcome Golang!
