import React, { useMemo, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Modal from 'react-native-modal'
import TimePicker from 'react-native-wheel-time-picker'

const MILLISECONDS_PER_MINUTE = 60 * 1000
const MILLISECONDS_PER_HOUR = 60 * 60 * 1000
const MILLISECONDS_PER_DAY = 24 * MILLISECONDS_PER_HOUR

export const Alarm = () => {
	const [visible, setVisible] = useState<boolean>(false)

	const [timeValue, setTimeValue] = useState(Date.now() % MILLISECONDS_PER_DAY)
	const [hour, min] = useMemo(() => {
		return [
			Math.floor(timeValue / MILLISECONDS_PER_HOUR),
			Math.floor((timeValue % MILLISECONDS_PER_HOUR) / MILLISECONDS_PER_MINUTE),
			Math.floor((timeValue % MILLISECONDS_PER_MINUTE) / 1000),
		]
	}, [timeValue])
	console.log(timeValue)
	return (
		<View style={styles.container}>
			<Text style={styles.timeValue}>
				{`${hour < 10 ? '0' : ''}${hour}:${min < 10 ? '0' : ''}${min}`}
			</Text>

			<Button title={'Show modal'} onPress={() => setVisible(true)}></Button>
			<Modal visible={visible}>
				<View style={styles.container}>
					<TimePicker
						containerStyle={{
							marginBottom: 20
						}}
						value={timeValue}
						wheelProps={{
							wheelHeight: 150,
							itemHeight: 50,
							containerStyle: {
								width: 70
							},
						}}
						textStyle={[styles.timeValue, { paddingRight: 15 }] }
						timeFormat={['hours24', ':','min']}
						onChange={(newValue) => setTimeValue(newValue)}
					/>
					<Button title={'Hide modal'} onPress={() => setVisible(false)}></Button>
				</View>
			</Modal>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	timeValue: {
		color: '#979797',
		fontSize: 48,
		fontFamily: 'HeliosCond Regular'
	},

})
