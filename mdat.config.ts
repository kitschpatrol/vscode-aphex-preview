import { mdatConfig } from '@kitschpatrol/mdat-config'
import packageJson from './package.json'

export default mdatConfig({
	configuration: {
		content() {
			const rows = Object.entries(packageJson.contributes.configuration.properties).map(
				([key, { default: defaultValue, description }]) =>
					`| \`${key}\` | \`${String(defaultValue)}\` | ${description} |`,
			)

			return ['| Setting | Default | Description |', '| --- | --- | --- |', ...rows].join('\n')
		},
	},
})
