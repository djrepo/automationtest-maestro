
# Setup

## Install windows enviroment

install node.js 
install android studio
install android sdk
install java 17
set ANDROID_HOME to android sdk
set JAVA_HOME to java
set path to platform_tools
npm install -g yarn

## Build project
npx expo install expo-dev-client
npx expo run:android or yarn start
npx expo prebuild

## installing ubuntu on windows as virtual machine
wsl --install

sudo apt update
sudo apt upgrade
sudo apt install openjdk-21-jdk
sudo apt install zip
## installing maestro to ubuntu
curl -Ls "https://get.maestro.mobile.dev" >> downMaestro.sh
chmod 777 downMaestro.sh
export MAESTRO_VERSION=1.36.0
./downMaestro.sh
cd ~
mkdir Android
cd Android
wget https://dl.google.com/android/repository/commandlinetools-linux-12266719_latest.zip
unzip commandlinetools-linux-12266719_latest.zip -d cmdline-tools
rm -rf commandlinetools-linux-12266719_latest.zip
echo  'export JAVA_HOME=/usr/lib/jvm/java-1.21.0-openjdk-amd64' >> ~/.bashrc
echo  'export ANDROID_HOME=$HOME/Android' >> ~/.bashrc
echo  'export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin' >> ~/.bashrc
sdkmanager --list
sdkmanager --install "platform-tools"
echo  'export PATH=$PATH:$ANDROID_HOME/platform-tools' >> ~/.bashrc

## running emulator and adb server on windows
c:\tools\AndroidSDK\emulator\emulator -avd Medium_Phone_API_35
adb -a -P 5037 nodaemon server
ipconfig -> write down ip adress of windows machine (e.g. 192.168.1.187)

## running maestro sample test from ubuntu
adb kill-server
export ADB_SERVER_SOCKET=tcp:192.168.1.187:5037
adb devices

maestro download-samples
cd samples
adb install sample.apk
maestro --host 192.168.1.187 test android-flow.yaml

## running project related maestro test from ubuntu
maestro --host 192.168.1.187 test /mnt/c/ws/automationtest-maestro/.maestro

maestro --host 192.168.1.187 studio




