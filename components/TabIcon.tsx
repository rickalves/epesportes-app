import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

type Props = {
    name: 'home' | 'resenha' | 'games' | 'profile';
    focused: boolean;
};


export function TabIcon({ name, focused }: Props) {
    const theme = useTheme();
    const icons: Record<string, { filled: JSX.Element; outline: JSX.Element }> = {
        home: {
            filled: (
                <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
                    <Path
                        d="M15.0595 1L1.5957 13.5106H4.93187V26.617C4.93187 27.9277 6.00421 29 7.31485 29H11.4851V19.7064C11.4851 18.9915 12.0808 18.5149 12.6766 18.5149H17.4425C18.0383 18.5149 18.634 18.9915 18.634 19.7064V29H22.6851C23.9957 29 25.068 27.9277 25.068 26.617V13.5106H28.4042L15.0595 1Z" 
                        stroke={theme.white} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        fill={theme.white}
                    />
                </Svg>
            ),
            outline: (
                <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
                    <Path
                        d="M15.0595 1L1.5957 13.5106H4.93187V26.617C4.93187 27.9277 6.00421 29 7.31485 29H11.4851V19.7064C11.4851 18.9915 12.0808 18.5149 12.6766 18.5149H17.4425C18.0383 18.5149 18.634 18.9915 18.634 19.7064V29H22.6851C23.9957 29 25.068 27.9277 25.068 26.617V13.5106H28.4042L15.0595 1Z"
                        stroke={theme.white} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    />
                </Svg>
            ),
        },
        resenha: {
            filled: (
                <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
                    <Path
                        d="M15.0595 1L1.5957 13.5106H4.93187V26.617C4.93187 27.9277 6.00421 29 7.31485 29H11.4851V19.7064C11.4851 18.9915 12.0808 18.5149 12.6766 18.5149H17.4425C18.0383 18.5149 18.634 18.9915 18.634 19.7064V29H22.6851C23.9957 29 25.068 27.9277 25.068 26.617V13.5106H28.4042L15.0595 1Z" 
                        stroke={theme.white} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        fill={theme.white}
                    />
                </Svg>
            ),
            outline: (
                <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
                    <Path
                        d="M15.0595 1L1.5957 13.5106H4.93187V26.617C4.93187 27.9277 6.00421 29 7.31485 29H11.4851V19.7064C11.4851 18.9915 12.0808 18.5149 12.6766 18.5149H17.4425C18.0383 18.5149 18.634 18.9915 18.634 19.7064V29H22.6851C23.9957 29 25.068 27.9277 25.068 26.617V13.5106H28.4042L15.0595 1Z"
                        stroke={theme.white} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    />
                </Svg>
            ),
        },
        games: {
            filled: (
                <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
                    <Path
                        d="M14.0756 4.63675L13.859 4.78576V5.04872V8.28461V8.54756L14.0756 8.69658L17.7346 11.2132L17.9733 11.3774L18.2345 11.252C18.2558 11.2417 18.2777 11.233 18.3002 11.2257L18.3006 11.2256L21.2181 10.2782H21.5231L21.6293 9.92054L22.655 6.46669L22.7291 6.21711L22.5671 6.01328C21.2927 4.40968 19.624 3.16432 17.724 2.39903L17.475 2.29874L17.2538 2.45085L14.0756 4.63675ZM9.41691 2.45101L9.19577 2.29873L8.94668 2.39897C7.04368 3.16476 5.37243 4.41208 4.09689 6.01858L3.93508 6.22237L4.00915 6.47182L5.03479 9.92566L5.11602 10.1992L5.39284 10.2684L5.40304 10.2709L5.41157 10.2731L5.42364 10.2762C5.42511 10.2766 5.42626 10.2769 5.42711 10.2771L5.42709 10.2772L5.43789 10.2807L8.36353 11.2307L8.36393 11.2308C8.38639 11.2381 8.40835 11.2469 8.42963 11.2571L8.69098 11.3827L8.92976 11.2182L12.5913 8.6964L12.8077 8.54736V8.28461V5.04872V4.78594L12.5913 4.63691L9.41691 2.45101ZM7.46667 19.9128H7.75588L7.90008 19.6621C7.90933 19.646 7.91942 19.6305 7.93031 19.6155L9.73586 17.1299C9.73612 17.1296 9.73639 17.1292 9.73665 17.1289C9.74417 17.1188 9.7538 17.107 9.77386 17.0829L9.95407 16.8667L9.86264 16.6004L8.47931 12.5722L8.38334 12.2928L8.09225 12.242C8.07313 12.2387 8.0542 12.2343 8.03557 12.2289L5.11481 11.2796L5.11318 11.2791C5.10435 11.2762 5.09566 11.273 5.08716 11.2692L4.81629 11.1501L4.58153 11.3302L1.76102 13.4943L1.55337 13.6537L1.56597 13.9151C1.66486 15.9666 2.3018 17.9559 3.41281 19.6833L3.56043 19.9128H3.83334H7.46667ZM16.371 24.7139L16.6256 24.6461L16.7136 24.3977L18.0034 20.7567L18.097 20.4922L17.9201 20.2744C17.9126 20.2651 17.9056 20.2569 17.9006 20.251L17.8892 20.2376C17.8884 20.2366 17.8877 20.2358 17.8872 20.2352L17.8866 20.2343L16.0776 17.7446L16.076 17.7424C16.0651 17.7276 16.055 17.7122 16.0458 17.6964L15.901 17.4487H15.6141H11.0526H10.7657L10.6209 17.6964C10.6116 17.7122 10.6016 17.7276 10.5907 17.7424L10.5891 17.7446L8.78012 20.2343L8.78008 20.2343L8.77918 20.2355C8.77873 20.2361 8.77816 20.2368 8.77748 20.2376L8.76606 20.251C8.76108 20.2569 8.75412 20.2651 8.74656 20.2744L8.56963 20.4922L8.66331 20.7567L9.95306 24.3977L10.041 24.6461L10.2957 24.7139C12.2861 25.2441 14.3806 25.2441 16.371 24.7139ZM18.7666 19.6583L18.9106 19.9087L19.1995 19.909L22.8315 19.9128L23.1048 19.9131L23.2526 19.6833C24.3636 17.9559 25.0005 15.9666 25.0994 13.9151L25.112 13.6537L24.9044 13.4943L22.0839 11.3302L21.8491 11.1501L21.5782 11.2692C21.5697 11.273 21.561 11.2762 21.5522 11.2791L21.5506 11.2796L18.6298 12.2289C18.6112 12.2343 18.5923 12.2387 18.5731 12.242L18.282 12.2928L18.1861 12.5722L16.8027 16.6004L16.7113 16.8667L16.8915 17.0829C16.9116 17.107 16.9213 17.1188 16.9288 17.1289C16.929 17.1293 16.9293 17.1296 16.9295 17.1299L18.7364 19.6116C18.7365 19.6118 18.7366 19.6119 18.7366 19.612C18.7474 19.6269 18.7574 19.6423 18.7666 19.6583ZM6.20352 2.66281C8.31387 1.25271 10.795 0.500054 13.3331 0.5C16.7356 0.50366 19.9978 1.85694 22.4037 4.26292C24.8098 6.66895 26.1631 9.93121 26.1667 13.3339C26.1666 15.8719 25.4139 18.3529 24.0039 20.4631C22.5937 22.5736 20.5894 24.2185 18.2444 25.1898C15.8995 26.1611 13.3191 26.4152 10.8297 25.9201C8.34025 25.4249 6.05357 24.2026 4.2588 22.4079C2.46403 20.6131 1.24177 18.3264 0.746595 15.837C0.251418 13.3476 0.505561 10.7672 1.47689 8.42223C2.44821 6.07724 4.09309 4.07295 6.20352 2.66281Z"
                        stroke={theme.white} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        fill={theme.white}
                    />
                </Svg>
            ),
            outline: (
                <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
                    <Path
                        d="M14.0756 4.63675L13.859 4.78576V5.04872V8.28461V8.54756L14.0756 8.69658L17.7346 11.2132L17.9733 11.3774L18.2345 11.252C18.2558 11.2417 18.2777 11.233 18.3002 11.2257L18.3006 11.2256L21.2181 10.2782H21.5231L21.6293 9.92054L22.655 6.46669L22.7291 6.21711L22.5671 6.01328C21.2927 4.40968 19.624 3.16432 17.724 2.39903L17.475 2.29874L17.2538 2.45085L14.0756 4.63675ZM9.41691 2.45101L9.19577 2.29873L8.94668 2.39897C7.04368 3.16476 5.37243 4.41208 4.09689 6.01858L3.93508 6.22237L4.00915 6.47182L5.03479 9.92566L5.11602 10.1992L5.39284 10.2684L5.40304 10.2709L5.41157 10.2731L5.42364 10.2762C5.42511 10.2766 5.42626 10.2769 5.42711 10.2771L5.42709 10.2772L5.43789 10.2807L8.36353 11.2307L8.36393 11.2308C8.38639 11.2381 8.40835 11.2469 8.42963 11.2571L8.69098 11.3827L8.92976 11.2182L12.5913 8.6964L12.8077 8.54736V8.28461V5.04872V4.78594L12.5913 4.63691L9.41691 2.45101ZM7.46667 19.9128H7.75588L7.90008 19.6621C7.90933 19.646 7.91942 19.6305 7.93031 19.6155L9.73586 17.1299C9.73612 17.1296 9.73639 17.1292 9.73665 17.1289C9.74417 17.1188 9.7538 17.107 9.77386 17.0829L9.95407 16.8667L9.86264 16.6004L8.47931 12.5722L8.38334 12.2928L8.09225 12.242C8.07313 12.2387 8.0542 12.2343 8.03557 12.2289L5.11481 11.2796L5.11318 11.2791C5.10435 11.2762 5.09566 11.273 5.08716 11.2692L4.81629 11.1501L4.58153 11.3302L1.76102 13.4943L1.55337 13.6537L1.56597 13.9151C1.66486 15.9666 2.3018 17.9559 3.41281 19.6833L3.56043 19.9128H3.83334H7.46667ZM16.371 24.7139L16.6256 24.6461L16.7136 24.3977L18.0034 20.7567L18.097 20.4922L17.9201 20.2744C17.9126 20.2651 17.9056 20.2569 17.9006 20.251L17.8892 20.2376C17.8884 20.2366 17.8877 20.2358 17.8872 20.2352L17.8866 20.2343L16.0776 17.7446L16.076 17.7424C16.0651 17.7276 16.055 17.7122 16.0458 17.6964L15.901 17.4487H15.6141H11.0526H10.7657L10.6209 17.6964C10.6116 17.7122 10.6016 17.7276 10.5907 17.7424L10.5891 17.7446L8.78012 20.2343L8.78008 20.2343L8.77918 20.2355C8.77873 20.2361 8.77816 20.2368 8.77748 20.2376L8.76606 20.251C8.76108 20.2569 8.75412 20.2651 8.74656 20.2744L8.56963 20.4922L8.66331 20.7567L9.95306 24.3977L10.041 24.6461L10.2957 24.7139C12.2861 25.2441 14.3806 25.2441 16.371 24.7139ZM18.7666 19.6583L18.9106 19.9087L19.1995 19.909L22.8315 19.9128L23.1048 19.9131L23.2526 19.6833C24.3636 17.9559 25.0005 15.9666 25.0994 13.9151L25.112 13.6537L24.9044 13.4943L22.0839 11.3302L21.8491 11.1501L21.5782 11.2692C21.5697 11.273 21.561 11.2762 21.5522 11.2791L21.5506 11.2796L18.6298 12.2289C18.6112 12.2343 18.5923 12.2387 18.5731 12.242L18.282 12.2928L18.1861 12.5722L16.8027 16.6004L16.7113 16.8667L16.8915 17.0829C16.9116 17.107 16.9213 17.1188 16.9288 17.1289C16.929 17.1293 16.9293 17.1296 16.9295 17.1299L18.7364 19.6116C18.7365 19.6118 18.7366 19.6119 18.7366 19.612C18.7474 19.6269 18.7574 19.6423 18.7666 19.6583ZM6.20352 2.66281C8.31387 1.25271 10.795 0.500054 13.3331 0.5C16.7356 0.50366 19.9978 1.85694 22.4037 4.26292C24.8098 6.66895 26.1631 9.93121 26.1667 13.3339C26.1666 15.8719 25.4139 18.3529 24.0039 20.4631C22.5937 22.5736 20.5894 24.2185 18.2444 25.1898C15.8995 26.1611 13.3191 26.4152 10.8297 25.9201C8.34025 25.4249 6.05357 24.2026 4.2588 22.4079C2.46403 20.6131 1.24177 18.3264 0.746595 15.837C0.251418 13.3476 0.505561 10.7672 1.47689 8.42223C2.44821 6.07724 4.09309 4.07295 6.20352 2.66281Z"
                        stroke={theme.white} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    />
                </Svg>
            ),
        },
        profile: {
            filled: (
                <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <Path
                        d="M15.0595 1L1.5957 13.5106H4.93187V26.617C4.93187 27.9277 6.00421 29 7.31485 29H11.4851V19.7064C11.4851 18.9915 12.0808 18.5149 12.6766 18.5149H17.4425C18.0383 18.5149 18.634 18.9915 18.634 19.7064V29H22.6851C23.9957 29 25.068 27.9277 25.068 26.617V13.5106H28.4042L15.0595 1Z" 
                        stroke={theme.white} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        fill={theme.white}
                    />
                </Svg>
            ),
            outline: (
                <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <Path
                        d="M15.0595 1L1.5957 13.5106H4.93187V26.617C4.93187 27.9277 6.00421 29 7.31485 29H11.4851V19.7064C11.4851 18.9915 12.0808 18.5149 12.6766 18.5149H17.4425C18.0383 18.5149 18.634 18.9915 18.634 19.7064V29H22.6851C23.9957 29 25.068 27.9277 25.068 26.617V13.5106H28.4042L15.0595 1Z"
                        stroke={theme.white} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    />
                </Svg>
            ),
        },
    };

    return <View style={styles.icon}>{focused ? icons[name].filled : icons[name].outline}</View>;
}

const styles = StyleSheet.create({
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
